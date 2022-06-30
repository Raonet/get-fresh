var iframe = document.createElement('IFRAME')
iframe.src = '//www.runoob.com/w3cnote/android-tutorial-webview.html'
iframe.style.position = 'fixed'
iframe.style.zIndex = 999999
iframe.style.left = 0
iframe.style.top = 0
iframe.style.width = '100vw'
iframe.style.height = '100vh'
iframe.style.background = '#000'
iframe.style.borderWidth = 0
document.getElementsByTagName('body')[0].style.overflow = 'hidden'
document.getElementsByTagName('body')[0].appendChild(iframe)
