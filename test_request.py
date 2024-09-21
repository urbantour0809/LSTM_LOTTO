import requests
import json

url = 'http://127.0.0.1:5000/predict'

input_data = {
    'input': [
        [5, 12, 23, 29, 35, 42],  # 테스트 입력 데이터
        # 60개의 입력 데이터를 추가할 수 있습니다
    ]
}

response = requests.post(url, json=input_data)

print(response.json())  # 서버로부터 받은 예측 결과 출력