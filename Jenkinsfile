pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim'
        }
    }
    stages {
        stage("Build") {
            steps {
                echo "Building.."
                sh '''
                    npm install
                    npm run build
                '''
            }
        }
        stage("Deploy Install") {
            environment {
                SERVICE_CREDS = credentials('9f479037-e993-420d-87bd-64168cf2f1ef')
            }
            steps {
                echo "Deploy Installing..."
                script {
                    def remote = [:]
                    remote.name = "${SSH_HOSTINGER_HOSTNAME}"
                    remote.host = "${SSH_HOSTINGER_HOSTNAME}"
                    remote.user = "${SERVICE_CREDS_USR}"
                    remote.password = "${SERVICE_CREDS_PSW}"
                    remote.allowAnyHosts = true
                    sshCommand remote: remote, command: "rm -rf /var/www/vocaltech.fr/html"
                    sshPut remote: remote, from: './dist/ng-portfolio/browser/.', into: '/var/www/vocaltech.fr/html'
                    sshCommand remote: remote, command: "mv /var/www/vocaltech.fr/html/browser/* /var/www/vocaltech.fr/html"
                    sshCommand remote: remote, command: "rm -rf /var/www/vocaltech.fr/html/browser"
                }
            }
        }
    }
}