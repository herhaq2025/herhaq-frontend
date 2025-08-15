from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app, origins=[
    'https://www.herhaq.org',
    'https://herhaq.org',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:4173',
    'https://herhaq-frontend.onrender.com',
    'https://herhaq.netlify.app',
    'https://herhaq.vercel.app'
])

@app.route('/api/chat', methods=['POST', 'OPTIONS'])
def chat():
    if request.method == 'OPTIONS':
        response = jsonify({'status': 'ok'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
        return response
    
    try:
        data = request.get_json()
        query = data.get('query', '')
        
        # Simple response for now - can be enhanced with actual AI
        response_text = f"Thank you for your question about '{query}'. Based on Pakistani law, I recommend consulting with a qualified legal professional who can provide specific guidance for your situation."
        
        return jsonify({
            'answer': response_text,
            'status': 'success'
        })
    except Exception as e:
        return jsonify({
            'answer': 'I apologize, but I encountered an error processing your request. Please try again.',
            'status': 'error',
            'error': str(e)
        }), 500

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
