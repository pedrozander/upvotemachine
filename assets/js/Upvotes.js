let Upvotes = {
    init(socket) {
        let channel = socket.channel('upvotes:lobby', {})
        channel.join()
        this.listenForChats(channel)
      },
    
      listenForChats(channel) {
        var upvotesLabel = document.getElementById("upvotesLabel")

        document.getElementById('upButton').addEventListener("click", () => {
          upvotesLabel.innerHTML = parseInt(upvotesLabel.innerHTML) + 1
          channel.push('shout', {upvotesCount: parseInt(upvotesLabel.innerHTML)})
        })

        document.getElementById('downButton').addEventListener("click", () => {
          upvotesLabel.innerHTML = parseInt(upvotesLabel.innerHTML) - 1
          channel.push('shout', {upvotesCount: parseInt(upvotesLabel.innerHTML)})
        })
    
        channel.on('shout', payload => {
          upvotesLabel.innerHTML = payload.upvotesCount
        })
      }
}

export default Upvotes