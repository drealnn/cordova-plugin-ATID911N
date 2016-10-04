var cordova = require('cordova'),
    exec = require('cordova/exec');

module.exports =  {
	deinitalize : function(successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'deinitalize', []);
	},
	wakeup : function(successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'wakeup', []);
	},
	sleep : function(successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'sleep', []);
	},
	pause_scanner : function(successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'pause_scanner', []);
	},
	resume_scanner : function(successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'resume_scanner', []);
	},
	getActionState : function(successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'getActionState', []);
	},
	getPowerRange : function(successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'getPowerRange', []);
	},
	getPower : function(successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'getPower', []);
	},
	getOperationTime : function(successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'getOperationTime', []);
	},
	setPower : function(powerInt, successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'setPower', [powerInt]);
	},
	setOperationTime : function(operationTime, successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'setOperationTime', [operationTime]);
	},
	setInventoryTime : function(inventoryTime, successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'setInventoryTime', [inventoryTime]);
	},
	setIdleTime : function(idleTime, successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'setIdleTime', [idleTime]);
	},
	onReaderReadTag : function(successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'onReaderReadTag', []);
	},
	onReaderResult :  function(successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'onReaderResult', []);
	},
	start_readTagSingle :  function(successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'start_readSingle', []);
	},
	start_readTagContinuous :  function(successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'start_readContinuous', []);
	},
	start_readTagMemory : function(args, successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'start_readMemory', [args]);
	},
	start_writeTagMemory : function(args, successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'start_writeMemory', [args]);
	},
	stop_scan :  function(successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'stop_read', []);
	},
	isStopped :  function(successCallback, errorCallback){
		return exec(successCallback, errorCallback, "Rfid", 'isStopped', []);
	}


};



