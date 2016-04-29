app_angular = angular.module('PedidosOnline')

app_angular.service('Factory', function ($webSql) {

    db = $webSql.openDatabase(DATABASE, '1.0', 'Test DB', 200000);

    db.createTable('erp_items', {
        //1
        "rowid": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "rowid_empresa": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "id_cia": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "rowid_item_erp": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "rowid_item_ext": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "id_item": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "item_referencia": {
            "type": "TEXT",
            "null": "NULL"
        },
        "item_codigo": {
            "type": "TEXT",
            "null": "NULL"
        },
        "item_descripcion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "item_linea": {
            "type": "TEXT",
            "null": "NULL"
        },
        "item_ext1": {
            "type": "TEXT",
            "null": "NULL"
        },
        "item_ext2": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_unidad": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_unidad_venta": {
            "type": "TEXT",
            "null": "NULL"
        },
        "ind_estado": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "descripcion_extensa": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fechacreacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "usuariocreacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fechamod": {
            "type": "TEXT",
            "null": "NULL"
        },
        "usuariomod": {
            "type": "TEXT",
            "null": "NULL"
        },
        "item_custom1": {
            "type": "TEXT",
            "null": "NULL"
        },
        "impuesto_id": {
            "type": "TEXT",
            "null": "NULL"
        },
        "impuesto_porcentaje": {
            "type": "REAL",
            "null": "NULL"
        },
        "descripcion_adicional": {
            "type": "TEXT",
            "null": "NULL"
        },
        "cantidad_embalaje": {
            "type": "INTEGER",
            "null": "NULL"
        }
    });

    db.createTable('t_pedidos', {
        "rowid": {
			"type": "INTEGER",
            "null": "NULL"
        },
        "rowid_empresa": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "id_cia": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "rowid_cliente_facturacion": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "rowid_cliente_despacho": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "rowid_lista_precios": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "rowid_bodega": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "fecha_pedido": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fecha_entrega": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fecha_solicitud": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_punto_envio": {
            "type": "TEXT",
            "null": "NULL"
        },
        "observaciones": {
            "type": "TEXT",
            "null": "NULL"
        },
        "observaciones2": {
            "type": "TEXT",
            "null": "NULL"
        },
        "orden_compra": {
            "type": "TEXT",
            "null": "NULL"
        },
        "referencia": {
            "type": "TEXT",
            "null": "NULL"
        },
        "valor_base": {
            "type": "REAL",
            "null": "NULL"
        },
        "valor_descuento": {
            "type": "REAL",
            "null": "NULL"
        },
        "valor_impuesto": {
            "type": "REAL",
            "null": "NULL"
        },
        "valor_total": {
            "type": "REAL",
            "null": "NULL"
        },
        "id_estado": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "numpedido_erp": {
            "type": "TEXT",
            "null": "NULL"
        },
        "numfactura_erp": {
            "type": "TEXT",
            "null": "NULL"
        },
        "estado_erp": {
            "type": "TEXT",
            "null": "NULL"
        },
        "valor_facturado": {
            "type": "REAL",
            "null": "NULL"
        },
        "id_cond_especial": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fechacreacion": {
            "type": "TEXT",
            "null": "NULL"
            //  "default": "CURRENT_TIMESTAMP" // default value
        },
        "usuariocreacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fechamod": {
            "type": "TEXT",
            "null": " NULL"
        },
        "usuariomod": {
            "type": "TEXT",
            "null": "NULL"
        },
        "tipo_doc": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_vendedor": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_cond_pago": {
            "type": "TEXT",
            "null": "NULL"
        },
        "numremision_erp": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_co": {
            "type": "TEXT",
            "null": " NULL"
        },
        "transporte_conductor_cc": {
            "type": "TEXT",
            "null": "NULL"
        },
        "transporte_conductor_nombre": {
            "type": "TEXT",
            "null": "NULL"
        },
        "transporte_placa": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fecha_anulacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "usuario_anulacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_nota": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "criterio_clasificacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "ind_estado_erp": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "modulo_creacion": {
            "type": "TEXT",
            "null": "NULL"
        }
    });

    db.createTable('t_pedidos_detalle', {
        "rowid": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "rowid_pedido": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "rowid_bodega": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "rowid_item": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "linea_descripcion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_unidad": {
            "type": "TEXT",
            "null": "NULL"
        },
        "cantidad": {
            "type": "REAL",
            "null": "NULL"
        },
        "factor": {
            "type": "REAL",
            "null": "NULL"
        },
        "cantidad_base": {
            "type": "REAL",
            "null": "NULL"
        },
        "precio_unitario": {
            "type": "REAL",
            "null": "NULL"
        },
        "id_motivo": {
            "type": "TEXT",
            "null": "NULL"
        },
        "stock": {
            "type": "REAL",
            "null": "NULL"
        },
        "valor_base": {
            "type": "REAL",
            "null": "NULL"
        },
        "valor_impuesto": {
            "type": "REAL",
            "null": "NULL"
        },
        "porcen_descuento": {
            "type": "REAL",
            "null": "NULL"
        },
        "valor_porcen_descuento": {
            "type": "REAL",
            "null": "NULL"
        },
        "valor_descuento": {
            "type": "REAL",
            "null": "NULL"
        },
        "valor_total_linea": {
            "type": "REAL",
            "null": "NULL"
        },
        "unidad_medida": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "fechacreacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "usuariocreacion": {
            "type": "vTEXT",
            "null": "NULL"
        },
        "fechamod": {
            "type": "TEXT",
            "null": " NULL"
        },
        "usuariomod": {
            "type": "TEXT",
            "null": " NULL"
        },
        "rowid_item_ext": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "item_ext1": {
            "type": "TEXT",
            "null": " NULL"
        },
        "item_ext2": {
            "type": "TEXT",
            "null": " NULL"
        },
        "num_lote": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fecha_anulacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "usuario_anulacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "flete": {
            "type": "REAL",
            "null": "NULL"
        },
        "porcen_descuento2": {
            "type": "REAL",
            "null": "NULL"
        },
        "valor_porcen_descuento2": {
            "type": "REAL",
            "null": "NULL"
        },
        "porcen_descuento3": {
            "type": "REAL",
            "null": "NULL"
        },
        "valor_porcen_descuento3": {
            "type": "REAL",
            "null": "NULL"
        }
        
    });

   	db.createTable('erp_terceros', {
        "rowid": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "rowid_empresa": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "id_cia": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "rowid_interno": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "identificacion": {
            "type": "TEXT",   
            "null": "NULL"
        },
        "tipo_identificacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "razonsocial": {
            "type": "TEXT",
            "null": "NULL"
        },
        "nombre_comercial": {
            "type": "TEXT",
            "null": "NULL"
        },
        "codigo_erp": {
            "type": "TEXT",
            "null": "NULL"
        },
        "ind_activo": {
            "type": "TEXT",
            "null": "NULL"
        },
        "es_vendedor": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "es_cliente": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "es_proveedor": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "es_accionista": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "industria": {
            "type": "TEXT",
            "null": "NULL"
        },
        "tipo_industria": {
            "type": "TEXT",
            "null": "NULL"
        },
        "clasificacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fechacreacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "usuariocreacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fechamod": {
            "type": "TEXT",
            "null": "NULL"
        },
        "usuariomod": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_impuesto": {
            "type": "TEXT",
            "null": "NULL"
        },
        "descripcion": {
            "type": "TEXT",
            "null": "NULL"
        }
    });

    db.createTable('erp_terceros_sucursales',{
        "rowid": {
            "type": "INTEGER",
            "null": "NULL"
         },
        "rowid_empresa": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "rowid_tercero": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "tipo_sucursal": {
            "type": "TEXT",
            "null": "NULL"
        },
        "nombre_sucursal": {
            "type": "TEXT",
            "null": "NULL"
        },
        "codigo_sucursal": {
            "type": "TEXT",
            "null": "NULL"
        },
        "direccion1": {
            "type": "TEXT",
            "null": "NULL"
        },
        "direccion2": {
            "type": "TEXT",
            "null": "NULL"
        },
        "direccion3": {
            "type": "TEXT",
            "null": "NULL"
        },
        "telefono1": {
            "type": "TEXT",
            "null": "NULL"
        },
        "telefono2": {
            "type": "TEXT",
            "null": "NULL"
        },
        "codigo_postal": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_ciudad": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_depto": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_pais": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_lista_precios": {
            "type": "TEXT",
            "null": "NULL"
        },
        "nombre_contacto": {
            "type": "TEXT",
            "null": "NULL"
        },
        "email_contacto": {
            "type": "TEXT",
            "null": "NULL"
        },
        "centro_operacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_condicion_pago": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_vendedor": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_unidad_negocio": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_grupo_descuento": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_zona": {
            "type": "TEXT",
            "null": "NULL"
        },
        "porcen_descuento": {
            "type": "REAL",
            "null": "NULL"
        },
        "ind_bloqueo_cupo": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "ind_bloqueo_mora": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "cupo_credito": {
            "type": "REAL",
            "null": "NULL"
        },
        "id_tipo_cliente": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fechacreacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "usuariocreacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fechamod": {
            "type": "TEXT",
            "null": "NULL"
        },
        "usuariomod": {
            "type": "TEXT",
            "null": "NULL"
        },
        "ind_estado": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "usuario": {
            "type": "TEXT",
            "null": "NULL"
        },
        "clave": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_bodega": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_division": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_canal": {
            "type": "TEXT",
            "null": "NULL"
        },
        "ind_principal": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "id_criterio_clasificacion": {
            "type": "TEXT",
            "null": "NULL"
        }
    });

    db.createTable('erp_entidades_master', {
        "rowid": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "id_tipo_maestro": {
            "type": "TEXT",
            "null": "NULL"
        },
        "rowid_empresa": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "erp_id_cia": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "erp_rowid_maestro": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "erp_id_maestro": {
            "type": "TEXT",
            "null": "NULL"
        },
        "erp_descripcion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "custom1": {
            "type": "TEXT",
            "null": "NULL"
        },
        "email": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fechacreacion": {
            "type": "TEXT",
            "null": "NOT NULL"
        },
        "usuariocreacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fechamod": {
            "type": "TEXT",
            "null": "NULL"
        },
        "usuariomod": {
            "type": "TEXT",
            "null": "NULL"
        },
        "ind_disabled": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "custom2": {
            "type": "TEXT",
            "null": "NULL"
        },
        "custom3": {
            "type": "TEXT",
            "null": "NULL"
        }
    });

    db.createTable('erp_items_precios', {
        "rowid": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "rowid_empresa": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "id_cia": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "id_lista_precios": {
            "type": "TEXT",
            "null": "NULL"
        },
        "rowid_item": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "rowid_item_ext": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "id_unidad": {
            "type": "TEXT",
            "null": "NULL"
        },
        "precio_lista": {
            "type": "REAL",
            "null": "NULL"
        },
        "fechacreacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "usuariocreacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fechamod": {
            "type": "TEXT",
            "null": "NULL"
        },
        "usuariomod": {
            "type": "TEXT",
            "null": "NULL"
        }
    });

    db.createTable('m_empresas_config', {
        "rowid": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "id_tipo_erp": {
            "type": "TEXT",
            "null": "NOT NULL",
        },
        "rowid_empresa": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "step": {
            "type": "TEXT",
            "null": "NULL"
        },
        "secuencia": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "tiporeg": {
            "type": "TEXT",
            "null": "NULL"
        },
        "parametros": {
            "type": "text",
            "null": "NULL"
        },
        "ind_activo": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "fechacreacion": {
            "type": "TEXT",
            "null": "NULL"
        }
    });

    db.createTable('m_modulos_config', {
        "rowid": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "modulo": {
            "type": "TEXT",
            "null": "NULL"
        },
        "campo": {
            "type": "TEXT",
            "null": "NULL"
        },
        "ind_ocultar": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "valor_defecto": {
            "type": "TEXT",
            "null": "NULL",
        },
        "usuario_creacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fecha_creacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "usuario_modificacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fecha_modificacion": {
            "type": "TEXT",
            "null": "NULL"
        }
    });

    db.createTable('s_parametros', {
        "rowid": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "rowid_empresa": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "cod_parametro": {
            "type": "TEXT",
            "null": "NULL"
        },
        "nombre_parametro": {
            "type": "TEXT",
            "null": "NULL"
        },
        "valor_parametro": {
            "type": "TEXT",
            "null": "NULL"
        }
    });

    db.createTable('l_log_eventos', {
        "rowid": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "rowid_empresa": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "id_log": {
            "type": "TEXT",
            "null": "NULL"
        },
        "id_tipo_entidad": {
            "type": "TEXT",
            "null": "NULL"
        },
        "rowid_entidad": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "nombre_campo": {
            "type": "TEXT",
            "null": "NULL"
        },
        "valor_campo": {
            "type": "TEXT",
            "null": "NULL",
        },
        "observaciones": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fechacreacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "usuariocreacion": {
            "type": "TEXT",
            "null": "NULL"
        }
    });

    db.createTable('s_opcionmenu', {
        "rowid": {
            "type": "INTEGER",
            "null": "NULL"
           
        },
        "rowid_opcionpadre": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "nombre_opcion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "ind_activo": {
            "type": "TEXT",
            "null": "NULL"
        },
        "numorden": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "url_link": {
            "type": "TEXT",
            "null": "NULL"
        },
        "texto_ayuda": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fechacreacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "usuariocreacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fechamod": {
            "type": "TEXT",
            "null": "NULL"
        },
        "usuariomod": {
            "type": "TEXT",
            "null": "NULL"
        },
        "icono": {
            "type": "TEXT",
            "null": "NULL"
        },
        "bgcolor": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fgcolor": {
            "type": "TEXT",
            "null": "NULL"
        }
    });
	
	db.createTable('erp_terceros_punto_envio',{
		"rowid": {
            "type": "INTEGER",
            "null": "NULL"
        },
		"rowid_empresa": {
            "type": "INTEGER",
            "null": "NULL"
        },
		"rowid_tercero": {
            "type": "INTEGER",
            "null": "NULL"
        },
		"codigo_sucursal": {
            "type": "TEXT",
            "null": "NULL"
        },
		"id_punto_envio": {
            "type": "TEXT",
            "null": "NULL"
        },
		"Nombre_punto_envio": {
            "type": "TEXT",
            "null": "NULL"
        },
		
		"id_vendedor": {
            "type": "TEXT",
            "null": "NULL"
        },
		"ind_estado": {
            "type": "INTEGER",
            "null": "NULL"
        },
		"fechacreacion": {
            "type": "TEXT",
            "null": "NULL"
        },
		"usuariocreacion": {
            "type": "TEXT",
            "null": "NULL"
        },
		"fechamod": {
            "type": "TEXT",
            "null": "NULL"
        },
        "usuariomod": {
            "type": "TEXT",
            "null": "NULL"
        }
	});

	db.createTable('erp_items_precios',{
		"rowid": {
            "type": "INTEGER",
            "null": "NULL"
        },
		"rowid_empresa": {
            "type": "INTEGER",
            "null": "NULL"
        },
		"id_cia": {
            "type": "INTEGER",
            "null": "NULL"
        },
		"id_lista_precios": {
            "type": "TEXT",
            "null": "NULL"
        },
		"rowid_item": {
            "type": "INTEGER",
            "null": "NULL"
        },
		"rowid_item_ext": {
            "type": "INTEGER",
            "null": "NULL"
        },
       	"id_unidad": {
            "type": "TEXT",
            "null": "NULL"
        },
        "precio_lista": {
            "type": "REAL",
            "null": "NULL"
        },
        "fechacreacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "usuariocreacion": {
            "type": "TEXT",
            "null": "NULL"
        },
        "fechamod": {
            "type": "INTEGER",
            "null": "NULL"
        },
        "usuariomod": {
            "type": "TEXT",
            "null": "NULL"
        }
	});

});