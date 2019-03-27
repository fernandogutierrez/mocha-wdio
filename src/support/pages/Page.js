
class Page{

    navigateTo(url='/'){
        browser.url(url)
    }

    set fullScreen(enable){
        enable ? browser.maximizeWindow() : browser.minimizeWindow();
    }
}

export default Page;
