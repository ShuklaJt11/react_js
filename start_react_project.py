import argparse
import os
import shutil

parser = argparse.ArgumentParser()
parser.add_argument('--name', metavar='name', help='Name of the project')
args = parser.parse_args()

STARTER_DIR = 'react-app-starter'
DESTINATION_DIR = args.name
PACKAGE_JSON = DESTINATION_DIR + '\package.json'
PACKAGE_LOCK_JSON = DESTINATION_DIR + '\package-lock.json'

if os.path.isdir(DESTINATION_DIR):
    print('Project directory already exists.')
else:    
    print('Creating Project Directory...')
    
    print('=> Copying required files.')
    shutil.copytree(STARTER_DIR, DESTINATION_DIR, symlinks = False, ignore = None, copy_function = shutil.copy2)
    print('==> Copied.')

    print('=> Project Directory created.')
    
    print('Setting up the project...')

    print('=> Applying changes to package.json')
    current_file = ''
    with open(PACKAGE_JSON, 'r') as package_file:
        current_file = package_file.read().replace(STARTER_DIR, DESTINATION_DIR)
    with open(PACKAGE_JSON, 'w') as package_file:
        package_file.write(current_file)
    print('==> Changes Applied.')
    
    print('=> Applying changes to package-lock.json')
    with open(PACKAGE_LOCK_JSON, 'r') as package_file:
        current_file = package_file.read().replace(STARTER_DIR, DESTINATION_DIR)
    with open(PACKAGE_LOCK_JSON, 'w') as package_file:
        package_file.write(current_file)
    print('==> Changes Applied.')
    
    print('=> Project setup complete.')