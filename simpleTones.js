//Create Audio Context
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = null;
var g = null;

//Tone Storage
var tone = {
	'C0': 16.35,
	'C#0': 17.32,
	'Db0': 17.32,
	'D0': 18.35,
	'D#0': 19.45,
	'Eb0': 19.45,
	'E0': 20.60,
	'F0': 21.83,
	'F#0': 23.12,
	'Gb0': 23.12,
	'G0': 24.50,
	'G#0': 25.96,
	'Ab0': 25.96,
	'A0': 27.50,
	'A#0': 29.14,
	'Bb0': 29.14,
	'B0': 30.87,
	'C1': 32.70,
	'C#1': 34.65,
	'Db1': 34.65,
	'D1': 36.71,
	'D#1': 38.89,
	'Eb1': 38.89,
	'E1': 41.20,
	'F1': 43.65,
	'F#1': 46.25,
	'Gb1': 46.25,
	'G1': 49.00,
	'G#1': 51.91,
	'Ab1': 51.91,
	'A1': 55.00,
	'A#1': 58.27,
	'Bb1': 58.27,
	'B1': 61.74,
	'C2': 65.41,
	'C#2': 69.30,
	'Db2': 69.30,
	'D2': 73.42,
	'D#2': 77.78,
	'Eb2': 77.78,
	'E2': 82.41,
	'F2': 87.31,
	'F#2': 92.50,
	'Gb2': 92.50,
	'G2': 98.00,
	'G#2': 103.83,
	'Ab2': 103.83,
	'A2': 110.00,
	'A#2': 116.54,
	'Bb2': 116.54,
	'B2': 123.47,
	'C3': 130.81,
	'C#3': 138.59,
	'Db3': 138.59,
	'D3': 146.83,
	'D#3': 155.56,
	'Eb3': 155.56,
	'E3': 164.81,
	'F3': 174.61,
	'F#3': 185.00,
	'Gb3': 185.00,
	'G3': 196.00,
	'G#3': 207.65,
	'Ab3': 207.65,
	'A3': 220.00,
	'A#3': 233.08,
	'Bb3': 233.08,
	'B3': 246.94,
	'C4': 261.63,
	'C#4': 277.18,
	'Db4': 277.18,
	'D4': 293.66,
	'D#4': 311.13,
	'Eb4': 311.13,
	'E4': 329.63,
	'F4': 349.23,
	'F#4': 369.99,
	'Gb4': 369.99,
	'G4': 392.00,
	'G#4': 415.30,
	'Ab4': 415.30,
	'A4': 440.00,
	'A#4': 466.16,
	'Bb4': 466.16,
	'B4': 493.88,
	'C5': 523.25,
	'C#5': 554.37,
	'Db5': 554.37,
	'D5': 587.33,
	'D#5': 622.25,
	'Eb5': 622.25,
	'E5': 659.26,
	'F5': 698.46,
	'F#5': 739.99,
	'Gb5': 739.99,
	'G5': 783.99,
	'G#5': 830.61,
	'Ab5': 830.61,
	'A5': 880.00,
	'A#5': 932.33,
	'Bb5': 932.33,
	'B5': 987.77,
	'C6': 1046.50,
	'C#6': 1108.73,
	'Db6': 1108.73,
	'D6': 1174.66,
	'D#6': 1244.51,
	'Eb6': 1244.51,
	'E6': 1318.51,
	'F6': 1396.91,
	'F#6': 1479.98,
	'Gb6': 1479.98,
	'G6': 1567.98,
	'G#6': 1661.22,
	'Ab6': 1661.22,
	'A6': 1760.00,
	'A#6': 1864.66,
	'Bb6': 1864.66,
	'B6': 1975.53,
	'C7': 2093.00,
	'C#7': 2217.46,
	'Db7': 2217.46,
	'D7': 2349.32,
	'D#7': 2489.02,
	'Eb7': 2489.02,
	'E7': 2637.02,
	'F7': 2793.83,
	'F#7': 2959.96,
	'Gb7': 2959.96,
	'G7': 3135.96,
	'G#7': 3322.44,
	'Ab7': 3322.44,
	'A7': 3520.00,
	'A#7': 3729.31,
	'Bb7': 3729.31,
	'B7': 3951.07,
	'C8': 4186.01,
	'C#8': 4435,
	'D8': 4699,
	'Eb8': 4978,
	'E8': 5274,
	'F8': 5588,
	'F#8': 5920,
	'G8': 6272,
	'G#8': 6645,
	'A8': 7040,
	'Bb8': 7459,
	'B8': 7902
}

// Chord Storage
var chord = {
	'C': [261.6, 329.6, 392.0],
	'Cm': [261.6, 311.1, 392.0],
	'C#': [277.2, 349.2, 415.3],
	'D': [293.7, 370.0, 440.0],
	'Dm': [293.7, 349.2, 440.0],
	'D#': [311.1, 392.0, 466.2],
	'E': [329.6, 415.3, 493.9],
	'Em': [329.6, 392.0, 493.9],
	'F': [349.2, 440.0, 261.6],
	'Fm': [349.2, 415.3, 261.6],
	'F#': [370.0, 277.2, 466.2],
	'G': [392.0, 493.9, 293.7],
	'Gm': [392.0, 466.2, 293.7],
	'G#': [466.2, 261.6, 311.1],
	'A': [440.0, 277.2, 329.6],
	'Am': [440.0, 261.6, 329.6],
	'A#': [466.2, 293.7, 349.2],
	'B': [493.9, 311.1, 370.0],
	'Bm': [493.9, 293.7, 370.0]
}
//Primary function
playTone = (frequency, type, duration) => {
	if (type === undefined) {
		type = "sine";
	}
	if (duration === undefined) {
		duration = 1.3;
	}
	o = context.createOscillator();
	g = context.createGain();
	o.connect(g);
	o.type = type;
	if (typeof frequency === "string") {
		if (tone[frequency] === undefined) {
			o.frequency.value = chord[frequency][0];
			completeChord(chord[frequency][1], type, duration);
			completeChord(chord[frequency][2], type, duration);
		} else if (chord[frequency] === undefined) {
			o.frequency.value = tone[frequency];
		}
	} else if (typeof frequency === "object") {
		o.frequency.value = frequency[0];
		completeChord(frequency[1], type, duration);
		completeChord(frequency[2], type, duration);
	} else {
		o.frequency.value = frequency;
	}
	g.connect(context.destination);
	o.start(0);
	g.gain.exponentialRampToValueAtTime(0.0001,context.currentTime + duration);
}

//This function helps complete chords and should not be used by itself
completeChord = (frequency, type, duration) => {
	osc = context.createOscillator();
	gn = context.createGain();
	osc.connect(gn);
	osc.type = type;
	osc.frequency.value = frequency;
	gn.connect(context.destination);
	osc.start(0);
	gn.gain.exponentialRampToValueAtTime(0.0001,context.currentTime + duration);
}






