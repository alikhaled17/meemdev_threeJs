#!/bin/bash
# config
envFilename='.env'
nextFolder='./.next/'
function apply_path {
  # read all config file  
  while read line; do
    # no comment or not empty
    if [ "${line:0:1}" == "#" ] || [ "${line}" == "" ]; then
      continue
    fi

echo "***** line ******"
echo $line

# split
configName=$(echo "$line" | cut -d'=' -f1)
configValue=$(echo "$line" | cut -d'=' -f2-)

echo "**** configName ****"
echo $configName

echo "**** configValue ****"
echo $configValue

# get system env
envValue=$(env | grep "^$configName=" | grep -oe '[^=]*$');

echo "**** envValue ****"
echo $envValue


# if config found
    if [ -n "$configValue" ] && [ -n "$envValue" ]; then
      # replace all
      echo "Replace: ${configValue} with: ${envValue}"
      find $nextFolder \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#$configValue#$envValue#g"
    fi
    done < $envFilename
}
apply_path
echo "Starting Nextjs *** "
echo $API_URL
node ./server.js