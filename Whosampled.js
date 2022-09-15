(async function extension() {
    const { Platform } = Spicetify;
    if (!Platform) {
      setTimeout(extension, 300);
      return;
    }

    function openSite(){

        var trackS = new String(Spicetify.Player.data.track.metadata.title)
        

        let searchTerm = trackS;
        let searchLink = `https://www.whosampled.com/search/?q=${searchTerm}`;
        let fckCustomEscapedLink = encodeURI(searchLink.replaceAll(' ', '+'));
        window.open(fckCustomEscapedLink);


      }

    const cntxMenu = new Spicetify.ContextMenu.Item("Whosampled", openSite)
    cntxMenu.register()

})();
