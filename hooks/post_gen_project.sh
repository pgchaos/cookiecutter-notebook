#!/usr/bin/env bash

# Initialise git repository
if [[ '{{ cookiecutter.init_repository }}' == 'y' ]]; then
    git init && git checkout -b main
    git remote add origin pgc:pgchaos/nb-{{ cookiecutter.notebook }}.git
fi

# Initialise boilerplate docs
if [[ '{{ cookiecutter.init_boilerplate }}' == 'y' ]]; then
    docker run --rm --volume "$(pwd):/notes" -u $(id -u) quay.io/terraform-docs/terraform-docs:0.16.0 /notes -c /notes/documentation.yaml
fi
