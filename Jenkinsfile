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
        /* 
        stage("Deploy Clean") {
            steps {
                echo "Deploy Cleaning..."
                sh '''

                '''
            }
        }
        */
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
                    sshPut remote: remote, from: './dist/ng-portfolio/browser/.', into: '/var/www/vocaltech.fr/html'
                    #sshCommand remote: remote, command: "mv ./target/browser/* ./target"
                    #sshCommand remote: remote, command: "rm -rf ./target/browser"
                }
            }
        }
    }
}