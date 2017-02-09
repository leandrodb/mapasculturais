<?php
namespace MapasCulturais\Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\entity(repositoryClass="MapasCulturais\Repository")
 */
class AgentOpportunity extends Opportunity{

    /**
     * @var \MapasCulturais\Entities\Agent
     *
     * @ORM\ManyToOne(targetEntity="MapasCulturais\Entities\Agent")
     * @ORM\JoinColumn(name="object_id", referencedColumnName="id")
     */
    protected $entity;

    /**
     * @var \MapasCulturais\Entities\AgentOpportunity
     *
     * @ORM\ManyToOne(targetEntity="MapasCulturais\Entities\AgentOpportunity", fetch="EAGER")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="parent_id", referencedColumnName="id")
     * })
     */
    protected $parent;
}