var motionAI_botId = 0;
var motionAI_width = 400;
var motionAI_height = 470;
var motionAI_imgUrl = 'https://api.motion.ai/sdk/botbtn.png';
function motionAI_Init(bot, showprompt, width, height, imgUrl) {
    if (width)
        motionAI_width = width;
    if (height)
        motionAI_height = height;
    if (imgUrl)
        motionAI_imgUrl = imgUrl;
    motionAI_botId = bot;
    if (showprompt) {
        var chatprompt = document.createElement('div');
        chatprompt.className = 'chatprompt';
        chatprompt.onclick = motionAI_Open;
        chatprompt.innerHTML = '<img src="' + motionAI_imgUrl + '" width="80"/>';
        document.body.appendChild(chatprompt);
    }
}
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return ( isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()) ;
    }
};
function motionAI_Open() {
    if (isMobile.any()) {
        window.open('https://api.motion.ai/webchat/' + motionAI_botId, "motionAI_chat", "width=" + motionAI_width + ",height=" + motionAI_height);
    } else {
        Modal.open({
            content: '<iframe style="width:' + motionAI_width + 'px; height:' + motionAI_height + 'px; border:0" src="https://api.motion.ai/webchat/' + motionAI_botId + '"></iframe>',
            draggable: false,
            openCallback: function() {}
        });
    }
}
var Modal = (function() {
    "use strict";
    var method = {}, settings = {}, modalOverlay = document.createElement('div'), modalContainer = document.createElement('div'), modalHeader = document.createElement('div'), modalContent = document.createElement('div'), modalClose = document.createElement('div'), centerModal, closeModalEvent, defaultSettings = {
        width: 'auto',
        height: 'auto',
        lock: false,
        hideClose: false,
        draggable: false,
        closeAfter: 0,
        openCallback: false,
        closeCallback: false,
        hideOverlay: false
    };
    method.open = function(parameters) {
        settings.width = parameters.width || defaultSettings.width;
        settings.height = parameters.height || defaultSettings.height;
        settings.lock = parameters.lock || defaultSettings.lock;
        settings.hideClose = parameters.hideClose || defaultSettings.hideClose;
        settings.draggable = parameters.draggable || defaultSettings.draggable;
        settings.closeAfter = parameters.closeAfter || defaultSettings.closeAfter;
        settings.closeCallback = parameters.closeCallback || defaultSettings.closeCallback;
        settings.openCallback = parameters.openCallback || defaultSettings.openCallback;
        settings.hideOverlay = parameters.hideOverlay || defaultSettings.hideOverlay;
        centerModal = function() {
            method.center({});
        }
        ;
        if (parameters.content && !parameters.ajaxContent) {
            modalContent.innerHTML = parameters.content;
        } else if (parameters.ajaxContent && !parameters.content) {
            modalContainer.className = 'modal-loading';
            method.ajax(parameters.ajaxContent, function insertAjaxResult(ajaxResult) {
                modalContent.innerHTML = ajaxResult;
            });
        } else {
            modalContent.innerHTML = '';
        }
        modalContainer.style.width = settings.width;
        modalContainer.style.height = settings.height;
        method.center({});
        if (settings.lock || settings.hideClose) {
            modalClose.style.visibility = 'hidden';
        }
        if (!settings.hideOverlay) {
            modalOverlay.style.visibility = 'visible';
        }
        modalContainer.style.visibility = 'visible';
        document.onkeypress = function(e) {
            if (e.keyCode === 27 && settings.lock !== true) {
                method.close();
            }
        }
        ;
        modalClose.onclick = function() {
            if (!settings.hideClose) {
                method.close();
            } else {
                return false;
            }
        }
        ;
        modalOverlay.onclick = function() {
            if (!settings.lock) {
                method.close();
            } else {
                return false;
            }
        }
        ;
        if (window.addEventListener) {
            window.addEventListener('resize', centerModal, false);
        } else if (window.attachEvent) {
            window.attachEvent('onresize', centerModal);
        }
        if (settings.draggable) {
            modalHeader.style.cursor = 'move';
            modalHeader.onmousedown = function(e) {
                method.drag(e);
                return false;
            }
            ;
        } else {
            modalHeader.onmousedown = function() {
                return false;
            }
            ;
        }
        if (settings.closeAfter > 0) {
            closeModalEvent = window.setTimeout(function() {
                method.close();
            }, settings.closeAfter * 1000);
        }
        if (settings.openCallback) {
            settings.openCallback();
        }
    }
    ;
    method.drag = function(e) {
        var xPosition = (window.event !== undefined) ? window.event.clientX : e.clientX
          , yPosition = (window.event !== undefined) ? window.event.clientY : e.clientY
          , differenceX = xPosition - modalContainer.offsetLeft
          , differenceY = yPosition - modalContainer.offsetTop;
        document.onmousemove = function(e) {
            xPosition = (window.event !== undefined) ? window.event.clientX : e.clientX;
            yPosition = (window.event !== undefined) ? window.event.clientY : e.clientY;
            modalContainer.style.left = ((xPosition - differenceX) > 0) ? (xPosition - differenceX) + 'px' : 0;
            modalContainer.style.top = ((yPosition - differenceY) > 0) ? (yPosition - differenceY) + 'px' : 0;
            document.onmouseup = function() {
                window.document.onmousemove = null;
            }
            ;
        }
        ;
    }
    ;
    method.ajax = function(url, successCallback) {
        var i, XMLHttpRequestObject = false, XMLHttpRequestObjects = [function() {
            return new window.XMLHttpRequest();
        }
        , function() {
            return new window.ActiveXObject('Msxml2.XMLHTTP.6.0');
        }
        , function() {
            return new window.ActiveXObject('Msxml2.XMLHTTP.3.0');
        }
        , function() {
            return new window.ActiveXObject('Msxml2.XMLHTTP');
        }
        ];
        for (i = 0; i < XMLHttpRequestObjects.length; i += 1) {
            try {
                XMLHttpRequestObject = XMLHttpRequestObjects[i]();
            } catch (ignore) {}
            if (XMLHttpRequestObject !== false) {
                break;
            }
        }
        XMLHttpRequestObject.open('GET', url, true);
        XMLHttpRequestObject.onreadystatechange = function() {
            if (XMLHttpRequestObject.readyState === 4) {
                if (XMLHttpRequestObject.status === 200) {
                    successCallback(XMLHttpRequestObject.responseText);
                    modalContainer.removeAttribute('class');
                } else {
                    successCallback(XMLHttpRequestObject.responseText);
                    modalContainer.removeAttribute('class');
                }
            }
        }
        ;
        XMLHttpRequestObject.send(null);
    }
    ;
    method.close = function() {
        modalContent.innerHTML = '';
        modalOverlay.setAttribute('style', '');
        modalOverlay.style.cssText = '';
        modalOverlay.style.visibility = 'hidden';
        modalContainer.setAttribute('style', '');
        modalContainer.style.cssText = '';
        modalContainer.style.visibility = 'hidden';
        modalHeader.style.cursor = 'default';
        modalClose.setAttribute('style', '');
        modalClose.style.cssText = '';
        if (closeModalEvent) {
            window.clearTimeout(closeModalEvent);
        }
        if (settings.closeCallback) {
            settings.closeCallback();
        }
        if (window.removeEventListener) {
            window.removeEventListener('resize', centerModal, false);
        } else if (window.detachEvent) {
            window.detachEvent('onresize', centerModal);
        }

  let header = $('#header')
  let searchBox = $('#search-box')
  let searchField = $('#search-field')

  $.get('/search?query=' + 'everything', function (data) {
    console.log(data)
    let results = $('#results')
    results.empty()
  let searchField = $('#search-field').val('microscopy')
    $('#bannerad').hide()
    data.forEach(function (d, i) {
      console.log(        '<div class="image' + i % 3 + 1 + '" style="float: left; height: 300px; width: 150px;"></div>')
      let result = $('' +
        '<div class="card" style="display: none; width: 100%;">' +
        '<div style="height: 300px;">'+
        '<div class="image' + (i % 3 + 1) + '" style="float: left; height: 300px; width: 150px;"></div>' +
        '<div id="text-description">' +

        '<h1>' + d['Instrument Name'] + '</h1>' +

        '<h2>' + d['Facility Name'] + '</h2>' +
        '<div style="height: 80px; overflow:hidden; display: -webkit-box; height: 60px;    -webkit-line-clamp: 3;    -webkit-box-orient: vertical; text-overflow: ellipsis;">' + d['Description'] + '</div>' +

        '<div id="expando" style="border-radius: 4px; margin-top: 30px; padding: 10px 40px; color: white !important; background-color: #1e7598; float: right; cursor: pointer;" onclick="expando(this)">more</div>'+
        '</div>' +
        '</div>' +
        '<div id="more" style="display: none;">'+
        '<img src="img/map.png" style="float: left;">'+
        '<div style="padding: 20px; margin-left: 312px;"><b>Address:</b> 800 Blackburn Rd, Clayton VIC 3168 <br> <b>Phone:</b> (03) 8540 4100 <br> <b>Hours:</b> Open today · Open 24 hours</div>'+
        '</div>'+

        '</div>'
      )
      results.append(result)
      searchBox.animate({
        "padding": "30px",
        "box-shadow": "0px 0px 10px #000",
        "width": "100%",
        "height": "100px"
      })
      searchField.css({
        "padding": "10px"
      })
      header.slideUp('slow', function(){
        result.slideDown('slow')
        searchBox.css({
          "position": "fixed",
          "top": 0,
        })
      })

    })
  })

    }
    ;
    method.center = function(parameters) {}
    ;
    modalOverlay.setAttribute('id', 'modal-overlay');
    modalContainer.setAttribute('id', 'modal-container');
    modalHeader.setAttribute('id', 'modal-header');
    modalContent.setAttribute('id', 'modal-content');
    modalClose.setAttribute('id', 'modal-close');
    modalHeader.appendChild(modalClose);
    modalContainer.appendChild(modalHeader);
    modalContainer.appendChild(modalContent);
    modalOverlay.style.visibility = 'hidden';
    modalContainer.style.visibility = 'hidden';
    if (window.addEventListener) {
        window.addEventListener('load', function() {
            document.body.appendChild(modalContainer);
        }, false);
    } else if (window.attachEvent) {
        window.attachEvent('onload', function() {
            document.body.appendChild(modalContainer);
        });
    }
    return method;
}());