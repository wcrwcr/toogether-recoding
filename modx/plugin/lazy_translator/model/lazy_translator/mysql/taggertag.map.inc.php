<?php
/**
 * @package lazy_translator
 */
$xpdo_meta_map['ltStore']= array (
  'package' => 'tagger',
  'version' => '1.1',
  'table' => 'lazy_translator_stores',
  'extends' => 'xPDOSimpleObject',
  'fields' => 
  array (
    'ru_name' => NULL,
    'en_name' => NULL,
    'pl_name' => NULL,
  ),
  'fieldMeta' => 
  array (
    'ru_name' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '1000',
      'phptype' => 'string',
      'null' => false,
    ),
    'en_name' => 
      array (
          'dbtype' => 'varchar',
          'precision' => '1000',
          'phptype' => 'string',
          'null' => true,
      ),
  'pl_name' =>
  array (
      'dbtype' => 'varchar',
      'precision' => '1000',
      'phptype' => 'string',
      'null' => true,
  ),
  ),
  'indexes' => 
  array (
    'iltStore' => 
    array (
      'alias' => 'iltStore',
      'primary' => false,
      'unique' => true,
      'type' => 'BTREE',
      'columns' => 
      array (
        'ru_name' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
        'group' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
  ),
);
