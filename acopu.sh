# !/bin/bash
read -p "enter your commit message: " messagues
echo $messagues
git add --all
git commit -m "${messagues}"
git push origin
#Для его работоспособности, пришлось перевести репозиторий с https на ssh
#Чтобы при push он не запрашивал логин и пароль