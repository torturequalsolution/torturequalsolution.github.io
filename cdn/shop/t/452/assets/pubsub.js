let subscribers = {};

function subscribe(eventName, callback) {
  return subscribers[eventName] === void 0 && (subscribers[eventName] = []),
    subscribers[eventName] = [...subscribers[eventName], callback],
  
  function () {
    subscribers[eventName] = subscribers[eventName].filter(cb => cb !== callback)
  }
}

function publish(eventName, data) {
  subscribers[eventName] && subscribers[eventName].forEach(callback => {
    callback(data)
  })
}

// # sourcemappingurl = /cdn/shop/t/452/assets/pubsub.js.map
