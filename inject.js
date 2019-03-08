var observer = new MutationObserver(documentChangeCallback)
observer.observe(document, { childList: true, subtree: true });

function documentChangeCallback(mutationList, observer){
  let videoMutations = [].concat.apply([],
    mutationList.map((mutation) => {
      return Array.prototype.filter.call(mutation.addedNodes, function(node){
        return node.nodeName == "VIDEO"
      })
    }).filter((x) => x.length > 0)
  )
  videoMutations.forEach((video) => {
    video.classList.add('ImprovedVideoPlayer')
  })
}
