"use strict";
/*
  JavaScript GameBoy Color Emulator
  Copyright (C) 2010-2016 Grant Galitz

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, includ[...]

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEME[...]
*/

// ... (All your emulator code above is unchanged)

// --- REPLACEMENT/FIX FOR THE END OF FILE, ENSURING NO SYNTAX ERROR ---
GameBoyCore.prototype.getTypedArray = function (length, defaultValue, numberType) {
    try {
        if (settings[5]) {
            throw(new Error("Settings forced typed arrays to be disabled."));
        }
        var arrayHandle;
        switch (numberType) {
            case "int8":
                arrayHandle = new Int8Array(length);
                break;
            case "uint8":
                arrayHandle = new Uint8Array(length);
                break;
            case "int32":
                arrayHandle = new Int32Array(length);
                break;
            case "float32":
                arrayHandle = new Float32Array(length);
                break;
            default:
                arrayHandle = new Array(length);
        }
        if (defaultValue != 0) {
            for (var index = 0; index < length; index++) {
                arrayHandle[index] = defaultValue;
            }
        }
    } catch (error) {
        console.log("Could not convert an array to a typed array: " + error.message, 1);
        arrayHandle = [];
        for (var index = 0; index < length; index++) {
            arrayHandle[index] = defaultValue;
        }
    }
    return arrayHandle;
};
