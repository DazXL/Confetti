class RandomConfetti {
  randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  fire() {
    confetti({
      angle: this.randomInRange(55, 125),
      spread: this.randomInRange(50, 70),
      particleCount: Math.floor(this.randomInRange(50, 100)),
      origin: { y: 0.6 },
    });
  }
}

class RealisticConfetti {
  constructor() {
    this.count = 200;
    this.defaults = {
      origin: { y: 0.7 },
    };
  }

  fireBurst(particleRatio, options = {}) {
    confetti(
      Object.assign({}, this.defaults, options, {
        particleCount: Math.floor(this.count * particleRatio),
      }),
    );
  }

  fireSequence() {
    this.fireBurst(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    this.fireBurst(0.2, {
      spread: 60,
    });

    this.fireBurst(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    this.fireBurst(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    this.fireBurst(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }
}

class ValentineConfetti {
  constructor() {
    this.defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["heart"],
      colors: ["#FFC0CB", "#FF69B4", "#FF1493", "#C71585"],
    };
  }

  fire(particleCount, scalar) {
    confetti({
      ...this.defaults,
      particleCount,
      scalar,
    });
  }

  fireSequence() {
    this.fire(50, 2);
    this.fire(25, 3);
    this.fire(10, 4);
  }
}

class StarsConfetti {
  constructor() {
    this.defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["star"],
      colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
    };
  }

  shoot() {
    confetti({
      ...this.defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ["star"],
    });

    confetti({
      ...this.defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
    });
  }

  fireSequence() {
    setTimeout(() => this.shoot(), 0);
    setTimeout(() => this.shoot(), 100);
    setTimeout(() => this.shoot(), 200);
  }
}

class EmojiConfetti {
  constructor() {
    this.defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
    };
  }

  shoot() {
    confetti({
      ...this.defaults,
      particleCount: 30,
      scalar: 1.2,
      shapes: ["circle", "square"],
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    });

    confetti({
      ...this.defaults,
      particleCount: 20,
      scalar: 2,
      shapes: ["emoji"],
      shapeOptions: {
        emoji: {
          value: ["🦄", "🌈"],
        },
      },
    });
  }

  fireSequence() {
    setTimeout(() => this.shoot(), 0);
    setTimeout(() => this.shoot(), 100);
    setTimeout(() => this.shoot(), 200);
  }
}

class ImagesConfetti {
  constructor() {
    this.imageShapes = [
      {
        src: "https://particles.js.org/images/fruits/apple.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/avocado.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/banana.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/berries.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/cherry.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/grapes.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/lemon.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/orange.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/peach.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/pear.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/pepper.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/plum.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/star.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/strawberry.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/watermelon.png",
        width: 32,
        height: 32,
      },
      {
        src: "https://particles.js.org/images/fruits/watermelon_slice.png",
        width: 32,
        height: 32,
      },
    ];
  }

  fire() {
    confetti({
      spread: 360,
      ticks: 200,
      gravity: 1,
      decay: 0.94,
      startVelocity: 30,
      particleCount: 100,
      scalar: 3,
      shapes: ["image"],
      shapeOptions: {
        image: this.imageShapes,
      },
    });
  }
}

class FireworksConfetti {
  constructor() {
    this.duration = 15 * 1000;
    this.intervalId = null;
    this.defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
    };
  }

  randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  stop() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  fire() {
    this.stop();

    const animationEnd = Date.now() + this.duration;

    this.intervalId = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        this.stop();
        return;
      }

      const particleCount = 50 * (timeLeft / this.duration);

      confetti(
        Object.assign({}, this.defaults, {
          particleCount,
          origin: { x: this.randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        }),
      );

      confetti(
        Object.assign({}, this.defaults, {
          particleCount,
          origin: { x: this.randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        }),
      );
    }, 250);
  }
}

class SnowConfetti {
  constructor() {
    this.duration = 15 * 1000;
    this.animationFrameId = null;
    this.skew = 1;
  }

  randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  stop() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  fire() {
    this.stop();
    this.skew = 1;

    const animationEnd = Date.now() + this.duration;

    const frame = () => {
      const timeLeft = animationEnd - Date.now();
      const ticks = Math.max(200, 500 * (timeLeft / this.duration));

      this.skew = Math.max(0.8, this.skew - 0.001);

      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks,
        origin: {
          x: Math.random(),
          y: Math.random() * this.skew - 0.2,
        },
        colors: ["#ffffff"],
        shapes: ["circle"],
        gravity: this.randomInRange(0.4, 0.6),
        scalar: this.randomInRange(0.4, 1),
        drift: this.randomInRange(-0.4, 0.4),
      });

      if (timeLeft > 0) {
        this.animationFrameId = requestAnimationFrame(frame);
      } else {
        this.animationFrameId = null;
      }
    };

    frame();
  }
}

class FunctionPicker {
  constructor(functions) {
    this.functions = functions;
  }

  pickRandom() {
    const randomIndex = Math.floor(Math.random() * this.functions.length);
    return this.functions[randomIndex];
  }

  runRandom() {
    const selectedFunction = this.pickRandom();
    return selectedFunction();
  }
}

class ConfettiApp {
  constructor() {
    this.randomConfetti = new RandomConfetti();
    this.realisticConfetti = new RealisticConfetti();
    this.valentineConfetti = new ValentineConfetti();
    this.starsConfetti = new StarsConfetti();
    this.emojiConfetti = new EmojiConfetti();
    this.imagesConfetti = new ImagesConfetti();
    this.fireworksConfetti = new FireworksConfetti();
    this.snowConfetti = new SnowConfetti();
    this.functionPicker = new FunctionPicker([
      () => "Random confetti ready",
      () => "Realistic confetti ready",
      () => "Valentine confetti ready",
      () => "Stars confetti ready",
      () => "Emoji confetti ready",
      () => "Images confetti ready",
      () => "Fireworks confetti ready",
      () => "Snow confetti ready",
    ]);
  }

  run() {
    this.randomConfetti.fire();
    this.realisticConfetti.fireSequence();
    this.valentineConfetti.fireSequence();
    console.log(this.functionPicker.runRandom());
  }
}

const confettiApp = new ConfettiApp();

window.confettiApp = confettiApp;
window.fireRandomConfetti = () => confettiApp.randomConfetti.fire();
window.fireRealisticConfetti = () => confettiApp.realisticConfetti.fireSequence();
window.fireValentineConfetti = () => confettiApp.valentineConfetti.fireSequence();
window.fireStarsConfetti = () => confettiApp.starsConfetti.fireSequence();
window.fireEmojiConfetti = () => confettiApp.emojiConfetti.fireSequence();
window.fireImagesConfetti = () => confettiApp.imagesConfetti.fire();
window.fireFireworksConfetti = () => confettiApp.fireworksConfetti.fire();
window.fireSnowConfetti = () => confettiApp.snowConfetti.fire();