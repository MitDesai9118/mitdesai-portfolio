from flask import Flask, send_from_directory, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
# Enable CORS so the React frontend on port 5173 can talk to it
CORS(app)

# Directory to store the files
FILES_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'files')
os.makedirs(FILES_DIR, exist_ok=True)

@app.route('/api/download/<filename>', methods=['GET'])
def download_file(filename):
    # Mapping request keywords to actual file names
    file_map = {
        'resume': 'Mit_Desai_Resume.pdf',
        'paper': 'Mit_Desai_Research_Paper.pdf',
        'patent': 'Mit_Desai_Patent.pdf'
    }
    
    target_name = file_map.get(filename.lower())
    if not target_name:
        return jsonify({'error': 'Invalid file request'}), 400
        
    file_path = os.path.join(FILES_DIR, target_name)
    
    # If the file does not exist, create a placeholder text document with a PDF extension
    # so that the user receives a working download immediately
    if not os.path.exists(file_path):
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(f"Placeholder document for Mit Desai's {filename.title()}.\n")
                f.write(f"Replace this file with the actual {target_name} PDF file in backend/files/ to serve the real document.\n")
        except Exception as e:
            return jsonify({'error': f'Failed to create placeholder: {str(e)}'}), 500
            
    return send_from_directory(directory=FILES_DIR, path=target_name, as_attachment=True)

if __name__ == '__main__':
    print("Document Download Server is starting...")
    app.run(debug=True, port=5000)
