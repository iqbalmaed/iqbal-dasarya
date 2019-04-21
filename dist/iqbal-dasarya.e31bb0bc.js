// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var contacts = [{
  id: 1,
  fullName: "Genna Arnli",
  phoneNumber: "5278765234",
  email: "garnli0@photobucket.com",
  gender: "Female"
}, {
  id: 2,
  fullName: "Jojo Scotchford",
  phoneNumber: "7925766855",
  email: "jscotchford1@booking.com",
  gender: "Female"
}, {
  id: 3,
  fullName: "Kakalina Pietasch",
  phoneNumber: "3118199662",
  email: "kpietasch2@auda.org.au",
  gender: "Female"
}, {
  id: 4,
  fullName: "Araldo Coil",
  phoneNumber: "5887272284",
  email: "acoil3@behance.net",
  gender: "Male"
}, {
  id: 5,
  fullName: "Shadow Maffi",
  phoneNumber: "8455497996",
  email: "smaffi4@bravesites.com",
  gender: "Male"
}]; // Pencari with keyword

document.getElementById("finder").addEventListener("change", function () {
  var keyword = document.getElementById("finder").value;
  var Table = document.getElementById("table-row");
  Table.innerHTML = "";
  view(search(contacts, keyword));

  function search(arr, keyword) {
    return arr.filter(function (obj) {
      return obj["fullName"].includes(keyword);
    });
  }
}); //pencarian gender

var y = document.getElementById('pilihgender');
y.addEventListener('change', function () {
  var x = y.value;
  console.log(x);

  if (x == "Male") {
    var baru = contacts.filter(function (item) {
      return item.gender == "Male";
    });
    var Table = document.getElementById("table-row");
    Table.innerHTML = "";
    view(baru);
  }

  if (x == "Female") {
    var _baru = contacts.filter(function (item) {
      return item.gender == "Female";
    });

    var Table = document.getElementById("table-row");
    Table.innerHTML = "";
    view(_baru);
  }

  ;
}, false); // mengambil data

function view(contacts) {
  var tbody = document.getElementById("table-row");
  contacts.map(function (contacts, index) {
    var row = tbody.insertRow();
    var id = row.insertCell(0);
    var fullName = row.insertCell(1);
    var phoneNumber = row.insertCell(2);
    var email = row.insertCell(3);
    var gender = row.insertCell(4);
    id.innerHTML = contacts.id;
    fullName.innerHTML = contacts.fullName;
    phoneNumber.innerHTML = contacts.phoneNumber;
    email.innerHTML = contacts.email;
    gender.innerHTML = contacts.gender;
  });
}

document.getElementById("tombolku").addEventListener("click", function () {
  var fullName1 = document.getElementById("fname");
  var phoneNumber1 = document.getElementById("pnumber");
  var email1 = document.getElementById("email"); // buat data pada radio

  var gender1;

  if (document.getElementById("r1").checked) {
    gender1 = document.getElementById("r1");
  } else if (document.getElementById("r2").checked) {
    gender1 = document.getElementById("r2");
  }

  var tambah = {
    id: 6,
    fullName: fullName1.value,
    phoneNumber: phoneNumber1.value,
    email: email1.value,
    gender: gender1.value
  }; // Validation form

  if (fullName1.value.length == 0 || phoneNumber1.value.length == 0 || email1.value.length == 0 || gender1.value.length == 0) {
    alert("must be filled out");
    return false;
  } else {
    document.getElementById("table-row").innerHTML = "";
    var result = [].concat(contacts, [tambah]);
    view(result);
  } // )|| isNaN(phoneNumber1.value)||isNaN(email1.value)
  //     || isNaN(gender1.value))

});

function edit(data, id) {
  // array.filter
  console.log(_typeof(id));
  var baru = contacts.find(function (item) {
    return item.id == 1;
  });
  baru.fullName = data.fullName;
  baru.phoneNumber = data.phoneNumber;
  baru.email = data.email;
  baru.gender = data.gender;
  console.log(contacts); // spread operator ...
}

function remove(data, idnya) {
  // array.filter
  var removeIndex = contacts.map(function (item) {
    return item.id;
  }).indexOf(idnya); // spread operator ....

  contacts.splice(removeIndex, 1);
  console.log(contacts);
} // ambil data dari html


function addData() {
  var fullname = document.getElementById("fname");
  var ponenumber = document.getElementById("pnumber");
  var emaile = document.getElementById("email");
  console.log(fullname);
  console.log(ponenumber);
  console.log(emaile);
}

view(contacts); //add(id_baru);
//edit(id_baru, 1);
//remove(contacts, 1);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51499" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/iqbal-dasarya.e31bb0bc.js.map