<?php
/**
 * @property int $id
 * @property string $tag
 * @property string $alias
 * @property int $group
 *
 * @property TaggerGroup $Group
 * @property TaggerTagResource $Resources
 *
 * @package tagger
 */
class ltStore extends xPDOSimpleObject {

    public function save($cacheFlag= null) {
        return parent :: save($cacheFlag);
    }
}
?>