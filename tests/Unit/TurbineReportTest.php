<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Http\TurbineComponents\TurbineReport;

class TurbineReportTest extends TestCase
{

    public TurbineReport $turbineReport;
    public Array $decodedReport;

    public function setUp(): void
    {
        $this->turbineReport = new TurbineReport(1);
        $this->decodedReport = json_decode($this->turbineReport->report(), true)["report"];
    }

    // These tests all subtract 1 in the assertion due to
    // the array starting from 0 and the list from 1.

    /**
     * Test Coating Damage for
     * multiples of 3.
     *
     * @return void
     */
    public function test_coating_damage()
    {
        for ($i = 1; $i < 20; $i++) {
            if (($i * 3) % 5 === 0) {
                continue;
            }

            self::assertSame(
                "Coating Damage",
                $this->decodedReport[($i * 3) - 1]["content"]
            );
        }
    }

     /**
     * Test Lightning Strike for
     * multiples of 5.
     *
     * @return void
     */
    public function test_lightning_strike()
    {
        for ($i = 1; $i < 20; $i++) {
            if (($i * 5) % 3 === 0) {
                continue;
            }

            self::assertSame(
                "Lightning Strike",
                $this->decodedReport[($i * 5) - 1]["content"]
            );
        }
    }

     /**
     * Test Coating Damage and Lightning Strike
     * for multiples of 3 and 5.
     *
     * @return void
     */
    public function test_coating_damage_lightning_strike()
    {
        for ($i = 1; $i < 20; $i++) {
            if (($i * 5) % 3 === 0) {
                self::assertSame(
                    "Coating Damage and Lightning Strike",
                    $this->decodedReport[($i * 5) - 1]["content"]
                );
            }
        }
    }

    /**
     * Test for unreplaced numbers
     *
     * @return void
     */
    public function test_numbers()
    {
        for ($i = 1; $i < 100; $i++) {
            if ($i % 3 === 0 || $i % 5 === 0) {
                continue;
            }

            self::assertSame(
                $i,
                $this->decodedReport[($i - 1)]["content"]
            );
        }
    }
}
