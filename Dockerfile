# Sử dụng image của nginx làm base image
FROM nginx:latest

# Copy các file tĩnh của website vào trong thư mục của nginx
COPY src /usr/share/nginx/html/
