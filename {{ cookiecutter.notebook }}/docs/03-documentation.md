## Documentation

Notes are generated using `terraform-docs`, a document generation utility which uses Go templating engine. The template is defined in `documentation.yaml`.

To generate the notes, run the following command:

```bash
docker run --rm --volume "$(pwd):/notes" -u $(id -u) quay.io/terraform-docs/terraform-docs:0.16.0 /notes -c /notes/documentation.yaml
```
