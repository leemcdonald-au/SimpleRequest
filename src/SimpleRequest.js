// Import the EventEmitter.
import { EventEmitter } from 'events'

// Import the request functions.
import { request as https_request } from 'https'
import { request as http_request } from 'http'

// Add some symbols for data store.
const s = { value: Symbol('value'), complete: Symbol('complete') }

// Export a new class to handle the EventEmitter.
export default class SimpleRequest extends EventEmitter {
	// Options are the same options you'd pass to request()
	constructor(options = {}) {
		// Build the EventEmitter.
		super()

		// Add some default values.
		this[s.value]		= null
		this[s.complete]	= false

		// Break out the desired request function.
		const request = options.port === 443 ? https_request : http_request

		// Handle the request.
		const result = request(options, res => {
			// Colect data as it streams in.
			const data = []
			res.on('data', d => data.push(d))

			// Emit the final data result when compelte.
			res.on('end', () => {
				// Grab the final result and bind it to the objects value.
				const info		= data.toString()
				this[s.value]	= info

				// Emit the result.
				this.emit('end', info)
			})
		})

		// Forward the request error onto this object for handling.
		result.on('error', error => this.emit('error', error))

		// Mark the object as complete when the result ends.
		result.on('end', () => this[s.complete] = true)

		// Finish the request.
		result.end()
	}

	// Use the above as a promise.
	static promise(options = {}) {
		return new Promise((accept, reject) => {
			const request = new SimpleRequest(options)
			request.on('end',	data	=> accept(data))
			request.on('error',	error	=> reject(error))
		})
	}

	// Getters.
	get value()		{ return this[s.value] }
	get complete()	{ return this[s.complete] }
}