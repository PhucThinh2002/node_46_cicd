/**
 * https://docs.docker.com/reference/cli/docker
 * 
 * docker build tạo image: 
 *  - docker build -t image-be_cyber .
 * 
 * IMAGE LIST
 *  - docker image ls
 *  - docker image list
 * 
 * IMAGE REMOVE
 *  - docker image remove id_ten_image
 *  - docker image remove -f image-be_cyber && docker build -t image-be_cyber . 
 *      - remove và build lại
 * 
 * CONTAINER -------------------------------------------------
 * Container run: 
 *      - docker run -d -p 3070:3069 --name cons-be_cyber image-be_cyber 
 *      - d: không chiếm dụng terminal (chạy ngầm)
 * 
 * Container list:
 *  - docker container ls
 *  - docker container list
 *  - docker ps => câu lệnh các lập trình viên hay dùng
 *      - lấy ra tất cả container ĐANG ONLINE
 * 
 *  - docker ps -a
 *      - Lấy ra tất cả container ĐANG ONLINE và OFFLINE
 * 
 * Container Restart: 
 *  - docker container restart id_name_container
 * 
 * TERMINAL:
 *  - docker logs id_ten_container
 * 
 * Tìm địa chỉ IP của một container (LƯU Ý TRONG MÔI TRƯỜNG DOCKER)
 *  - Lấy địa chỉ IP của một container bên trong docker
 *  - docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' id_name_DB_SQL_container
 * 
 * 
 * start:
 *      - docker compose up -d
 *          -d: không chiếm dụng terminal (chạy ngầm)
 * 
 * stop:
 *      - docker compose down 
 * 
 * HUB:
 *      - docker login
 *      - docker push name_container:tag
 * 
 * 
*/