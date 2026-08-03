from icrawler.builtin import BingImageCrawler
import os
import time

# Dataset folder
DATASET_DIR = "dataset"

# Product classes and search keywords
classes = {
    "biscuits": "biscuits packet",
    "chips": "chips packet",
    "chocolate": "chocolate bar",
    "milk": "milk carton",
    "juice": "juice box",
    "soft_drink": "soft drink bottle",
    "shampoo": "shampoo bottle",
    "soap": "soap bar",
    "toothpaste": "toothpaste tube",
    "instant_noodles": "instant noodles packet"
}

IMAGES_PER_CLASS = 40

for folder, keyword in classes.items():
    save_dir = os.path.join(DATASET_DIR, folder)
    os.makedirs(save_dir, exist_ok=True)

    print(f"\nDownloading {folder} ({IMAGES_PER_CLASS} images)...")

    crawler = BingImageCrawler(
        downloader_threads=4,
        storage={"root_dir": save_dir}
    )

    crawler.crawl(
        keyword=keyword,
        max_num=IMAGES_PER_CLASS
    )

    time.sleep(2)

print("\nDataset downloaded successfully!")