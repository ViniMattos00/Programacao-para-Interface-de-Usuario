from flask import Flask, jsonify
import os
import json
from flask_cors import CORS


app = Flask(__name__)

CORS(app)
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

@app.route('/receive_data', methods=['POST'])
def receive_data():
    try:
        data = request.get_json()
        
        # Gerar um nome de arquivo único para evitar sobrescrita
        unique_filename = f"{uuid.uuid4()}.json"
        file_path = os.path.join(new_classes_folder, unique_filename)
        
        with open(file_path, 'w') as file:
            json.dump(data, file, indent=4)
        
        # Retornar uma resposta de sucesso
        return jsonify({'message': 'Dados recebidos e salvos com sucesso!', 'filename': unique_filename}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
if __name__ == '__main__':
    app.run(debug=True)
