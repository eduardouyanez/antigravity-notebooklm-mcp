const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1e293b',
    parent: 'game-container',
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.json('preguntas', 'preguntas.json');
}

function create() {
    const data = this.cache.json.get('preguntas');
    const questionData = data[0]; // Mostrar solo la primera como se pidió

    // Estilo de texto
    const titleStyle = { font: 'bold 36px Outfit', fill: '#f8fafc', align: 'center', wordWrap: { width: 700 } };
    const optionStyle = { font: '24px Outfit', fill: '#94a3b8', wordWrap: { width: 600 } };

    // Título
    this.add.text(400, 80, "Trivia Educativa: Ley 21778", { font: '18px Outfit', fill: '#38bdf8' }).setOrigin(0.5);

    // Pregunta
    const questionText = this.add.text(400, 200, questionData.pregunta, titleStyle).setOrigin(0.5);

    // Opciones
    questionData.opciones.forEach((opcion, index) => {
        const yPos = 350 + (index * 60);

        // Contenedor de botón (rectángulo)
        const btnBg = this.add.rectangle(400, yPos, 650, 50, 0x334155, 1).setInteractive();
        btnBg.setStrokeStyle(2, 0x475569);

        const txt = this.add.text(400, yPos, opcion, optionStyle).setOrigin(0.5);

        btnBg.on('pointerover', () => {
            btnBg.setFillStyle(0x475569);
            txt.setFill(0xf1f5f9);
        });

        btnBg.on('pointerout', () => {
            btnBg.setFillStyle(0x334155);
            txt.setFill(0x94a3b8);
        });

        btnBg.on('pointerdown', () => {
            if (index === questionData.indice_correcta) {
                btnBg.setFillStyle(0x16a34a); // Verde
                txt.setText("¡CORRECTO!").setFill('#ffffff');
            } else {
                btnBg.setFillStyle(0xdc2626); // Rojo
                txt.setFill('#ffffff');
            }
        });
    });

    // Decoración: Gradiente sutil
    const graphics = this.add.graphics();
    graphics.fillGradientStyle(0x0f172a, 0x0f172a, 0x1e293b, 0x1e293b, 0.5);
    graphics.fillRect(0, 0, 800, 600);
    graphics.setDepth(-1);
}
