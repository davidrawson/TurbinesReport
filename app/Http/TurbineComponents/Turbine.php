<?php

namespace App\Http\TurbineComponents;

use Illuminate\View\Compilers\ComponentTagCompiler;

class Turbine
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
    public function __construct(int $numberOfComponents = 100, int $id = 0)
    {
        $this->id = $id;
        $this->generateReport($numberOfComponents);
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
    private function generateReport(int $numberOfComponents)
    {
        // for ($i = 1; $i <= 100; $i++) {
        //     if ($i % 3 === 0) {

        //     }
        // }


        $y = 1;
        while ($y <= $numberOfComponents) {
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
        $report = [];
        if (empty($this->components)) return;
        foreach ($this->components as $key => $component) {
            if ($component->hasDamage()) {
                // array_push($report, $component->damagesAsString());
                // $report[$component->getId()] = $component->damagesAsString();
                $report[] = ["id" => $key, "content" => $component->damagesAsString()];

            } else {
                // array_push($report, "{$component->getId()}");
                // $report[$component->getId()] = $component->getId();
                $report[] = ["id" => $key, "content" => $key + 1];

            }
        }

        // // reformat that array
        // for ($y = 1; $y <= 100; $y++) {

        // }
        return json_encode($report);
    }
}
