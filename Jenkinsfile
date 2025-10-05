pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t task-manager-api .'
            }
        }

        stage('Run with Docker Compose') {
            steps {
                bat 'docker-compose up -d'
            }
        }

        stage('Code Quality') {
            steps {
                bat 'npx eslint src || exit 0'
            }
        }

        stage('Security Scan') {
            steps {
                bat 'npx snyk test || exit 0'
            }
        }

        stage('Monitoring') {
            steps {
                bat 'docker ps'
            }
        }
    }
}
