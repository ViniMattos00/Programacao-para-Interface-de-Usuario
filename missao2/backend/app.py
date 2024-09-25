from flask import Flask, jsonify
import os
import json

app = Flask(__name__)

# Defina o caminho para a pasta 'json' e o arquivo 'classes.json'
json_folder = os.path.join(os.getcwd(), 'json')
json_file = os.path.join(json_folder, 'classes.json')
json_turmas = os.path.join(json_folder, 'turmas.json')


@app.route('/get_classes', methods=['GET'])
def get_classes():
    try:
        # Abrir o arquivo JSON e carregá-lo
        with open(json_file, 'r') as file:
            data = json.load(file)
        # Retornar o conteúdo como JSON
        return jsonify(data), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/get_turmas', methods=['GET'])
def get_turmas():
    try:
        # Abrir o arquivo JSON e carregá-lo
        with open(json_turmas, 'r') as file:
            data = json.load(file)
        # Retornar o conteúdo como JSON
        return jsonify(data), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
