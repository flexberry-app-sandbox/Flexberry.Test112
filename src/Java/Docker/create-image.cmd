docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test11-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t test11-java/app ../../..
