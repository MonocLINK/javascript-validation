var _0x14db = ['html', '#grade', '#message', 'ready', 'Numbers\x20only!', 'You\x20have\x20successfully\x20registered\x20', '#firstName', '#registrationForm', 'validate', 'Don\x27t\x20leave\x20this\x20blank!', 'Campers\x20must\x20be\x20in\x20grades\x205-8', 'val'];
(function(_0x53f1ab, _0x14db9f) { var _0xf7552f = function(_0x18c48b) { while (--_0x18c48b) { _0x53f1ab['push'](_0x53f1ab['shift']()); } };
    _0xf7552f(++_0x14db9f); }(_0x14db, 0x83));
var _0xf755 = function(_0x53f1ab, _0x14db9f) { _0x53f1ab = _0x53f1ab - 0x0; var _0xf7552f = _0x14db[_0x53f1ab]; return _0xf7552f; };
var _0x570b0a = _0xf755;
$(document)[_0x570b0a('0x4')](function() { var _0x507912 = _0x570b0a,
        _0x18c48b = { 'firstName': { 'required': !![] }, 'grade': { 'required': !![], 'min': 0x5, 'max': 0x8, 'digits': !![] } },
        _0x391451 = { 'firstName': { 'required': _0x507912('0xa') }, 'grade': { 'required': _0x507912('0xa'), 'min': _0x507912('0xb'), 'max': 'Campers\x20must\x20be\x20in\x20grades\x205-8', 'digits': _0x507912('0x5') } };
    $(_0x507912('0x8'))[_0x507912('0x9')]({ 'submitHandler': runMyProgram, 'rules': _0x18c48b, 'messages': _0x391451 }); });

function runMyProgram() { var _0x406cac = _0x570b0a,
        _0x3a2562 = $(_0x406cac('0x7'))[_0x406cac('0x0')](),
        _0x4f2af9 = $(_0x406cac('0x2'))[_0x406cac('0x0')]();
    $(_0x406cac('0x3'))[_0x406cac('0x1')](_0x406cac('0x6') + _0x3a2562 + '\x20for\x20grade\x20' + _0x4f2af9 + '\x20camp.<br>See\x20you\x20soon!'); }