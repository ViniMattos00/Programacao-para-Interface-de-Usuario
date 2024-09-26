from flask import Flask, jsonify, request
import os
import json
import uuid
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Defina o caminho para a pasta 'json' e os arquivos 'classes.json' e 'turmas.json'
json_folder = os.path.join(os.getcwd(), 'json')
json_file = os.path.join(json_folder, 'classes.json')
json_turmas = os.path.join(json_folder, 'turmas.json')

# Pasta onde serão salvas as novas classes
new_classes_folder = os.path.join(json_folder, 'new_classes')

# Crie a pasta 'new_classes' se não existir
if not os.path.exists(new_classes_folder):
    os.makedirs(new_classes_folder)


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


# @app.route('/receive_data', methods=['POST'])
# def receive_data():
#     try:
#         # Receber o JSON enviado na requisição POST
#         #data = request.get_json()

#         try:
#         # Abrir o arquivo JSON e carregá-lo
#             with open(json_file, 'r') as file:
#                 data = json.load(file)
#                 data = data + data
#             # Retornar o conteúdo como JSON
#             #return jsonify(data), 200
#         except Exception as e:
#             return jsonify({'error': str(e)}), 500

#         # Gerar um nome de arquivo único usando UUID
#         unique_filename = f"{uuid.uuid4()}.json"
#         #file_path = os.path.join(new_classes_folder, unique_filename)        
#         file_path = os.path.join(json_folder, 'classes.json')        
#         # Salvar os dados no arquivo
#         with open(file_path, 'w') as file:
#             json.dump(data, file, indent=4)
        
       
#         # Retornar uma resposta de sucesso
#         #return jsonify({'message': 'Dados recebidos e salvos com sucesso!', 'filename': unique_filename, 'directory' : new_classes_folder}), 200
#         return jsonify({'message': 'Dados recebidos e salvos com sucesso!', 'filename': 'turmas.json', 'directory' : json_folder}), 200
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

@app.route('/receive_data', methods=['POST'])
def receive_data():
    try:
        # Open the JSON file and load it
        try:
            with open(json_file, 'r') as file:
                data = json.load(file)
        except Exception as e:
            return jsonify({'error': f'Error reading JSON file: {str(e)}'}), 500

        # Check if there are any professors
        if len(data) == 0:
            return jsonify({'error': 'No professors found in the JSON file'}), 400

        # Get the last professor
        last_professor = data[-1]

        # Synthetic new class data to be added
        new_class = {
            "id": str(len(last_professor['materias']) + 1),  # Automatically increment ID
            "titulo": "Introdução à Inteligência Artificial",
            "fotoCapa": "https://example.com/img.jpg",
            "corIcon": "#ff00ff"
        }

        # Add the new class to the last professor's 'materias'
        if 'materias' in last_professor:
            last_professor['materias'].append(new_class)
        else:
            last_professor['materias'] = [new_class]

        # Save the updated JSON data back to the file
        try:
            with open(json_file, 'w') as file:
                json.dump(data, file, indent=4)
        except Exception as e:
            return jsonify({'error': f'Error writing to JSON file: {str(e)}'}), 500

        # Return a success message
        return jsonify({
            'message': 'Synthetic class added successfully!',
            'professor': last_professor['nome'],
            'new_class': new_class
        }), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500



if __name__ == '__main__':
    app.run(debug=True)
