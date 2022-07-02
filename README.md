# Cookiecutter Notebook

A logical and flexible structure for taking notes from learning material.

## Requirments

- Python >= 3.5+
- Cookiecutter >= 2.1.1

Cookiecutter can be installed from Homebrew: 

```bash
$ brew install cookiecutter
```

## Usage

```bash
cookiecutter gh:pgchaos/cookiecutter-notebook
```

## Features

- [x] Notes directory structure created
- [x] Templates are generated using the fields from `cookiecutter.json`
- [x] `documentation.yaml` is copied without rendering
- [x] Initial `README.md` is generated with basic information about the learning material using post generation hook script.
- [x] Directory is initialised with git and remote origin is set to the **notebook** name from `cookiecutter.json` using post generation hook script.
