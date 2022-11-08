<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class DeleteFile extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'delete:file';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'file terhapus';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $allFiles = Storage::allFiles('images');
        foreach ($allFiles as $item) {
            $fileTime = Storage::lastModified($item);
            if ($fileTime < now()->subMinutes(1)->getTimestamp()) {
                Storage::delete($item);
            }
        }
        return Command::SUCCESS;
    }
}
