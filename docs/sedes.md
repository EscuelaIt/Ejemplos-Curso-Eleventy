---
layout: layout.html
title: Sedes de la empresa
eleventyExcludeFromCollections: true
sedes:
  - nombre: Madrid
    direccion: C/ Leganitos 22
    telefono: 910 123 456
  - nombre: Barcelona
    direccion: Rambla 50
    telefono: +34 930 000 000
  - nombre: Rio de Janeiro
    direccion: Avenida Atlântica 1000
    telefono: +55 21 3000 0000
---

# Sedes de la empresa

Nos encuentras en estas sedes internacionales...

{% for sede in sedes -%}
## {{ sede.nombre }} 
{{ sede.direccion }}  
{{ sede.telefono }}
{% endfor %}