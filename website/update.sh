# --------------------------------------------------------------------------- 
# Filename: /Users/vikas/dev/wip/madhur/website/update.sh                      #
# Path: /Users/vikas/dev/wip/madhur/website                                    #
# Created Date: Tuesday, July 25th 2023, 8:30:49 pm                            #
# Author: Vikas K Solegaonkar                                                  #
#                                                                              #
# Copyright (c) 2023 Your Company                                              #
# --------------------------------------------------------------------------- 



yarn install
yarn build
aws s3 sync dist/ s3://madhurabhakti  --profile yoga.world
aws cloudfront create-invalidation --distribution-id E3GNPZ92A63UC4 --paths "/*" --profile yoga.world
