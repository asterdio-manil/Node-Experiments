#!/bin/bash

dropdb -U postgres projectautodb
createdb -U postgres projectautodb

psql -U postgres < ./bin/Product.sql 