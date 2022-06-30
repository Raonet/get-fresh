var iframe = document.createElement('IFRAME')
iframe.src = '//192.168.0.100:9540/404.html'
iframe.style.position = 'fixed'
iframe.style.zIndex = 999999
iframe.style.left = 0
iframe.style.top = 0
iframe.style.width = '100vw'
iframe.style.height = '100vh'
iframe.style.background = '#000'
document.getElementsByTagName('body')[0].appendChild(iframe)
