app_angular = angular.module('PedidosOnline')

app_angular.service('Factory', function ($webSql) {

    db = $webSql.openDatabase(DATABASE, '1.0', 'Test DB', 200000);

    //db.dropTable('erp_items');

    db.createTable('erp_items', {
        "rowid": {
            "type": "INTEGER",
            "null": "NOT NULL",
            "primary": true,
            "auto_increment": true
        },
        "rowid_empresa": {
            "type": "INTEGER",
            "null": "NOT NULL",
        },
        "id_cia": {
            "type": "integer",
            "null": "NOT NULL",
        },
        "rowid_item_erp": {
            "type": "integer",
            "null": "NOT NULL",
        },
        "rowid_item_ext": {
            "type": "integer",
            "null": "NOT NULL",
        },
        "id_item": {
            "type": "integer",
            "null": "NOT NULL",
        },
        "item_referencia": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "item_codigo": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "item_descripcion": {
            "type": "varchar(255)",
            "null": "NOT NULL",
        },
        "item_linea": {
            "type": "varchar (255)",
            "null": "NOT NULL",
        },
        "item_ext1": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "item_ext2": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "id_unidad": {
            "type": "varchar(10)",
            "null": "NOT NULL",
        },
        "id_unidad_venta": {
            "type": "varchar(10)",
            "null": "NOT NULL",
        },
        "ind_estado": {
            "type": "integer",
            "null": "NOT NULL",
        },
        "descripcion_extensa": {
            "type": "text",
            "null": "NOT NULL",
        },
        "fechacreacion": {
            "type": "datetime",
            "null": "NOT NULL",
        },
        "usuariocreacion": {
            "type": "varchar (50)",
            "null": "NOT NULL",
        },
        "fechamod": {
            "type": "datetime",
            "null": "NOT NULL",
        },
        "usuariomod": {
            "type": "varchar (50)",
            "null": "NOT NULL",
        },
        "item_custom1": {
            "type": "varchar (50)",
            "null": "NOT NULL",
        },
        "impuesto_id": {
            "type": "varchar (50)",
            "null": "NOT NULL",
        },
        "impuesto_porcentaje": {
            "type": "float",
            "null": "NOT NULL",
        },
        "descripcion_adicional": {
            "type": "varchar (500)",
            "null": "NOT NULL",
        },
        "cantidad_embalaje": {
            "type": "integer",
            "null": "NOT NULL",
        }
    });

    db.createTable('t_pedidos', {
        "rowid": {
            "type": "INTEGER",
            "null": "NOT NULL",
            "primary": true,
            "auto_increment": false
        },
        "rowid_empresa": {
            "type": "INTEGER",
            "null": "NULL",
        },
        "id_cia": {
            "type": "INTEGER",
            "null": "NULL",
        },
        "rowid_cliente_facturacion": {
            "type": "INTEGER",
            "null": "NULL",
        },
        "rowid_cliente_despacho": {
            "type": "INTEGER",
            "null": "NULL",
        },
        "rowid_lista_precios": {
            "type": "INTEGER",
            "null": "NULL",
        },
        "rowid_bodega": {
            "type": "INTEGER",
            "null": "NULL",
        },
        "fecha_pedido": {
            "type": "datetime",
            "null": "NULL",
        },
        "fecha_entrega": {
            "type": "datetime",
            "null": "NULL",
        },
        "fecha_solicitud": {
            "type": "datetime",
            "null": "NULL",
        },
        "id_punto_envio": {
            "type": "varchar(10)",
            "null": "NULL",
        },
        "observaciones": {
            "type": "varchar(500)",
            "null": "NULL",
        },
        "observaciones2": {
            "type": "varchar(500)",
            "null": "NULL",
        },
        "orden_compra": {
            "type": "varchar(50)",
            "null": "NULL",
        },
        "referencia": {
            "type": "varchar(50)",
            "null": "NULL",
        },
        "valor_base": {
            "type": "float",
            "null": "NULL",
        },
        "valor_descuento": {
            "type": "float",
            "null": "NULL",
        },
        "valor_impuesto": {
            "type": "float",
            "null": "NULL",
        },
        "valor_total": {
            "type": "float",
            "null": "NULL",
        },
        "id_estado": {
            "type": "INTEGER",
            "null": "NULL",
        },
        "numpedido_erp": {
            "type": "varchar(50)",
            "null": "NULL",
        },
        "numfactura_erp": {
            "type": "varchar(50)",
            "null": "NULL",
        },
        "estado_erp": {
            "type": "varchar(50)",
            "null": "NULL",
        },
        "valor_facturado": {
            "type": "float",
            "null": "NULL",
        },
        "id_cond_especial": {
            "type": "varchar(50)",
            "null": "NULL",
        },
        "fechacreacion": {
            "type": "datetime",
            "null": "NULL",
            "default": "CURRENT_TIMESTAMP" // default value
        },
        "usuariocreacion": {
            "type": "varchar(50)",
            "null": "NULL",
        },
        "fechamod": {
            "type": "datetime",
            "null": " NULL",
        },
        "usuariomod": {
            "type": "varchar(50)",
            "null": "NULL",
        },
        "tipo_doc": {
            "type": "varchar(10)",
            "null": "NULL",
        },
        "id_vendedor": {
            "type": "varchar(25)",
            "null": "NULL",
        },
        "id_cond_pago": {
            "type": "varchar(10)",
            "null": "NULL",
        },
        "numremision_erp": {
            "type": "varchar(25)",
            "null": "NULL",
        },
        "id_co": {
            "type": "varchar(10)",
            "null": " NULL",
        },
        "transporte_conductor_cc": {
            "type": "varchar(25)",
            "null": "NULL",
        },
        "transporte_conductor_nombre": {
            "type": "varchar(25)",
            "null": "NULL",
        },
        "transporte_placa": {
            "type": "datetime",
            "null": "NULL",
        },
        "fecha_anulacion": {
            "type": "datetime",
            "null": "NULL",
        },
        "usuario_anulacion": {
            "type": "varchar(50)",
            "null": "NULL",
        },
        "id_nota": {
            "type": "INTEGER",
            "null": "NULL",
        },
        "criterio_clasificacion": {
            "type": "varchar(50)",
            "null": "NULL",
        }
    })

    db.createTable('t_pedidos_detalle', {
        "rowid": {
            "type": "INTEGER",
            "null": "NOT NULL",
            "primary": true,
            "auto_increment": true
        },
        "rowid_pedido": {
            "type": "INTEGER",
            "null": "NULL",
        },
        "rowid_bodega": {
            "type": "INTEGER",
            "null": "NULL",
        },
        "rowid_item": {
            "type": "INTEGER",
            "null": "NULL",
        },
        "linea_descripcion": {
            "type": "varchar(255)",
            "null": "NULL",
        },
        "id_unidad": {
            "type": "varchar(10)",
            "null": "NULL",
        },
        "cantidad": {
            "type": "float",
            "null": "NULL",
        },
        "factor": {
            "type": "float",
            "null": "NULL",
        },
        "cantidad_base": {
            "type": "float",
            "null": "NULL",
        },
        "precio_unitario": {
            "type": "float",
            "null": "NULL",
        },
        "id_motivo": {
            "type": "varchar(10)",
            "null": "NULL",
        },
        "stock": {
            "type": "float",
            "null": "NULL",
        },
        "valor_base": {
            "type": "float",
            "null": "NULL",
        },
        "valor_impuesto": {
            "type": "float",
            "null": "NULL",
        },
        "porcen_descuento": {
            "type": "float",
            "null": "NULL",
        },
        "valor_porcen_descuento": {
            "type": "float",
            "null": "NULL",
        },
        "valor_descuento": {
            "type": "float",
            "null": "NULL",
        },
        "valor_total_linea": {
            "type": "float",
            "null": "NULL",
        },
        "fechacreacion": {
            "type": "datetime",
            "null": "NULL",
        },
        "usuariocreacion": {
            "type": "varchar(50)",
            "null": "NULL",
        },
        "fechamod": {
            "type": "datetime",
            "null": " NULL",
        },
        "usuariomod": {
            "type": "varchar(50)",
            "null": " NULL",
        },
        "rowid_item_ext": {
            "type": "INTEGER",
            "null": "NULL",
        },
        "item_ext1": {
            "type": "varchar(50)",
            "null": " NULL",
        },
        "item_ext2": {
            "type": "varchar(50)",
            "null": " NULL",
        },
        "num_lote": {
            "type": "varchar(50)",
            "null": "NULL",
        },
        "fecha_anulacion": {
            "type": "datetime",
            "null": "NULL",
        },
        "usuario_anulacion": {
            "type": "varchar(50)",
            "null": "NULL",
        }
    })

    db.createTable('erp_terceros', {
        "rowid": {
            "type": "INTEGER",
            "null": "NOT NULL",
            "primary": true,
            "auto_increment": true
        },
        "rowid_empresa": {
            "type": "INTEGER",
            "null": "NOT NULL",
        },
        "id_cia": {
            "type": "INTEGER",
            "null": "NOT NULL",
        },
        "rowid_interno": {
            "type": "INTEGER",
            "null": "NOT NULL",
        },
        "identificacion": {
            "type": "INTEGER",
            "null": "NOT NULL",
        },
        "tipo_identificacion": {
            "type": "varchar(10)",
            "null": "NOT NULL",
        },
        "razonsocial": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "nombre_comercial": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "codigo_erp": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "ind_activo": {
            "type": "varchar(10)",
            "null": "NOT NULL",
        },
        "es_vendedor": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "es_cliente": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "es_proveedor": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "fechacreacion": {
            "type": "datetime",
            "null": "NOT NULL",
        },
        "usuariocreacion": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "fechamod": {
            "type": "datetime",
            "null": "NOT NULL",
        },
        "usuariomod": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "id_impuesto": {
            "type": "INTEGER",
            "null": "NOT NULL",
        }
    })

    db.createTable('s_opcionmenu', {
        "rowid": {
            "type": "INTEGER",
            "null": "NOT NULL",
            "primary": true,
            "auto_increment": true
        },
        "rowid_opcionpadre": {
            "type": "varchar(60)",
            "null": "NOT NULL",
        },
        "nombre_opcion": {
            "type": "varchar(60)",
            "null": "NOT NULL",
        },
        "ind_activo": {
            "type": "varchar(60)",
            "null": "NOT NULL",
        },
        "numorden": {
            "type": "varchar(60)",
            "null": "NOT NULL",
        },
        "url_link": {
            "type": "varchar(60)",
            "null": "NOT NULL",
        },
        "texto_ayuda": {
            "type": "varchar(60)",
            "null": "NOT NULL",
        },
        "fechacreacion": {
            "type": "varchar(60)",
            "null": "NOT NULL",
        },
        "usuariocreacion": {
            "type": "varchar(60)",
            "null": "NOT NULL",
        },
        "fechamod": {
            "type": "varchar(60)",
            "null": "NOT NULL",
        },
        "usuariomod": {
            "type": "varchar(60)",
            "null": "NOT NULL",
        },
        "icono": {
            "type": "varchar(60)",
            "null": "NOT NULL",
        },
        "bgcolor": {
            "type": "varchar(60)",
            "null": "NOT NULL",
        },
        "fgcolor": {
            "type": "varchar(60)",
            "null": "NOT NULL",
        }
    })

    db.createTable('erp_items_precios', {
        "rowid": {
            "type": "INTEGER",
            "null": "NOT NULL",
            "primary": true,
            "auto_increment": true
        },
        "rowid_empresa": {
            "type": "INTEGER",
            "null": "NOT NULL",
        },
        "id_cia": {
            "type": "INTEGER",
            "null": "NOT NULL",
        },
        "id_lista_precios": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "rowid_item": {
            "type": "INTEGER",
            "null": "NOT NULL",
        },
        "rowid_item_ext": {
            "type": "INTEGER",
            "null": "NOT NULL",
        },
        "id_unidad": {
            "type": "varchar(10)",
            "null": "NOT NULL",
        },
        "precio_lista": {
            "type": "float",
            "null": "NOT NULL",
        },
        "fechacreacion": {
            "type": "datetime",
            "null": "NOT NULL",
        },
        "usuariocreacion": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "fechamod": {
            "type": "datetime",
            "null": "NOT NULL",
        },
        "usuariomod": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        }
    })

    db.createTable('m_empresas_config', {
        "rowid": {
            "type": "INTEGER",
            "null": "NOT NULL",
            "primary": true,
            "auto_increment": true
        },
        "id_tipo_erp": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "rowid_empresa": {
            "type": "INTEGER",
            "null": "NOT NULL",
        },
        "step": {
            "type": "varchar(100)",
            "null": "NOT NULL",
        },
        "secuencia": {
            "type": "INTEGER",
            "null": "NOT NULL",
        },
        "tiporeg": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "parametros": {
            "type": "text",
            "null": "NOT NULL",
        },
        "ind_activo": {
            "type": "INTEGER",
            "null": "NOT NULL",
        },
        "fechacreacion": {
            "type": "datetime",
            "null": "NOT NULL",
        }
    })

    db.createTable('m_modulos_config', {
        "rowid": {
            "type": "INTEGER",
            "null": "NOT NULL",
            "primary": true,
            "auto_increment": true
        },
        "modulo": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "campo": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "ind_ocultar": {
            "type": "INTEGER",
            "null": "NOT NULL",
        },
        "valor_defecto": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "usuario_creacion": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "fecha_creacion": {
            "type": "varchar(50)",
            "null": "NULL",
        },
        "usuario_modificacion": {
            "type": "varchar(50)",
            "null": "NULL",
        },
        "fecha_modificacion": {
            "type": "datetime",
            "null": "NULL",
        }
    })

    db.createTable('erp_entidades_master', {
        "rowid": {
            "type": "INTEGER",
            "null": "NOT NULL",
            "primary": true,
            "auto_increment": true
        },
        "id_tipo_maestro": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "rowid_empresa": {
            "type": "integer",
            "null": "NOT NULL",
        },
        "erp_id_cia": {
            "type": "integer",
            "null": "NOT NULL",
        },
        "erp_rowid_maestro": {
            "type": "integer",
            "null": "NOT NULL",
        },
        "erp_id_maestro": {
            "type": "varchar(30)",
            "null": "NOT NULL",
        },
        "erp_descripcion": {
            "type": "varchar(255)",
            "null": "NOT NULL",
        },
        "custom1": {
            "type": "varchar(20)",
            "null": "NULL",
        },
        "email": {
            "type": "varchar(255)",
            "null": "NOT NULL",
        },
        "fechacreacion": {
            "type": "datetime",
            "null": "NOT NULL",
        },
        "usuariocreacion": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "fechamod": {
            "type": "datetime",
            "null": "NOT NULL",
        },
        "usuariomod": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "ind_disabled": {
            "type": "bit",
            "null": "NOT NULL",
        },
        "custom2": {
            "type": "varchar(20)",
            "null": "NOT NULL",
        },
        "custom3": {
            "type": "varchar(30)",
            "null": "NOT NULL",
        }
    })

    db.createTable('s_parametros', {
        "rowid": {
            "type": "INTEGER",
            "null": "NOT NULL",
            "primary": true,
            "auto_increment": true
        },
        "rowid_empresa": {
            "type": "integer",
            "null": "NOT NULL",
        },
        "cod_parametro": {
            "type": "varchar(45)",
            "null": "NOT NULL",
        },
        "nombre_parametro": {
            "type": "varchar(500)",
            "null": "NOT NULL",
        },
        "valor_parametro": {
            "type": "text",
            "null": "NOT NULL",
        },
        "id_tipo_maestro": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        }
    })

    db.createTable('l_log_eventos', {
        "rowid": {
            "type": "INTEGER",
            "null": "NOT NULL",
            "primary": true,
            "auto_increment": true
        },
        "rowid_empresa": {
            "type": "integer",
            "null": "NOT NULL",
        },
        "id_log": {
            "type": "varchar(20)",
            "null": "NOT NULL",
        },
        "id_tipo_entidad": {
            "type": "varchar(20)",
            "null": "NOT NULL",
        },
        "rowid_entidad": {
            "type": "integer",
            "null": "NOT NULL",
        },
        "nombre_campo": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "valor_campo": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        },
        "observaciones": {
            "type": "text",
            "null": "NOT NULL",
        },
        "fechacreacion": {
            "type": "datetime",
            "null": "NOT NULL",
        },
        "usuariocreacion": {
            "type": "varchar(50)",
            "null": "NOT NULL",
        }
    })
});