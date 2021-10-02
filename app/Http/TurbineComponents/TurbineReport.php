<?php

namespace App\Http\TurbineComponents;

use App\Models\Turbine;
use Illuminate\View\Compilers\ComponentTagCompiler;

class TurbineReport
{
    /**
     * @var Component[] $components
     */
    private $components = [];

    /** @var int $id  */
    private $id = 0;

    /**
     * @param int $numberOfComponents
     * @param int $id
     */
    // public function __construct(int $numberOfComponents = 100, int $id = 0)
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
     * @param int $numberOfComponents
     */
    private function generateReport()
    {
        // for ($i = 1; $i <= 100; $i++) {
        //     if ($i % 3 === 0) {

        //     }
        // }


        $y = 1;
        while ($y <= 100) {
        // for ($y = 1; $y <= 100; $y++) {
            $component = new Component($y, $this->id);
            if ($y % 3 === 0) {
                $component->recordDamage("Coating Damage");
            }
            if ($y % 5 === 0) {
                $component->recordDamage("Lightning Damage");
            }

            // $this->components[] = ["id" => $y - 1, "content" => $component];
            // array_push($this->components, $component);
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
                // array_push($report, $component->damagesAsString());
                // $report[$component->getId()] = $component->damagesAsString();
                $damageReport[] = ["id" => $key, "content" => $component->damagesAsString()];

            } else {
                // array_push($report, "{$component->getId()}");
                // $report[$component->getId()] = $component->getId();
                $damageReport[] = ["id" => $key, "content" => $key + 1];

            }
        }

        $fullReport = ["turbine" => $this->turbineDetails, "report" => $damageReport];
        // // reformat that array
        // for ($y = 1; $y <= 100; $y++) {

        // }
        return json_encode($fullReport);
    }
}
