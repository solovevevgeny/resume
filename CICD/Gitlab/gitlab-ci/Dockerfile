FROM python:3
ENV PYTHONBUFFERED 1
WORKDIR /app
COPY . /app/

RUN pip install -r requirements.txt
EXPOSE 8000
ENTRYPOINT ["python", "-m", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]