#!/bin/bash

curl -X POST -H "Content-Type: application/json" \
		-d "{\"amount\":17950}" \
    https://shop-squad-api.onrender.com/payments/intent