<?php

namespace App\Http\TurbineComponents;

class TurbineReport
{
    /**
     * @var Component[] $components
     */
    private $components = [];

    /** @var int $id  */
    private $id = 0;

        
    /**
     * __construct
     *
     * @param  mixed $turbineDetails
     * @return void
     */
    public function __construct($turbineDetails)
    {
        $this->turbineDetails = $turbineDetails;
        $this->generateReport();
    }

    /**
     * @return int
     */
    public function getId() {
        return $this->id;
    }
    
    /**
     * generateReport
     *
     * @return void
     */
    private function generateReport()
    {
        $y = 1;
        while ($y <= 100) {
            $component = new Component($y, $this->id);
            if ($y % 3 === 0) {
                $component->recordDamage("Coating Damage");
            }
            if ($y % 5 === 0) {
                $component->recordDamage("Lightning Damage");
            }

            $this->components[] = $component;
            $y++;
        }
    }

    /**
     * @return string
     */
    public function report()
    {
        $damageReport = [];
        if (empty($this->components)) return;
        foreach ($this->components as $key => $component) {
            if ($component->hasDamage()) {
                $damageReport[] = ["id" => $key, "content" => $component->damagesAsString()];
            } else {
                $damageReport[] = ["id" => $key, "content" => $key + 1];
            }
        }
        $fullReport = ["turbine" => $this->turbineDetails, "report" => $damageReport];

        return json_encode($fullReport);
    }
}
