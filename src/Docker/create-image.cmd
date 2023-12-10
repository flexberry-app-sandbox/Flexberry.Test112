docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test11/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t test11/app ../..
