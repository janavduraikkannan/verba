"""Keeps the shared code identical on every practice site.

Verba holds the master copy. Everything outside site/ (and outside each site's own pictures, media, tools and docs)
must be byte-for-byte the same in Verba, Palabras, Mots and Wörter.

  python3 tools/sync_shared.py          copy Verba's shared files into ../palabras, ../mots and ../woerter
  python3 tools/sync_shared.py --check  only report files that differ (exit code 1 if any do)

Run it from the verba folder, with the four repositories side by side.
"""
import filecmp, os, shutil, sys

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITES = ['palabras', 'mots', 'woerter']
SHARED_FILES = ['index.html', 'keys.html', 'getkey.html']
SHARED_DIRS = ['css', 'js']

def shared_paths(root):
    out = [f for f in SHARED_FILES if os.path.exists(os.path.join(root, f))]
    for d in SHARED_DIRS:
        for name in sorted(os.listdir(os.path.join(root, d))):
            if not name.startswith('.'): out.append(f'{d}/{name}')
    return out

def main():
    check = '--check' in sys.argv
    master = shared_paths(HERE)
    bad = 0
    for s in SITES:
        root = os.path.join(os.path.dirname(HERE), s)
        if not os.path.isdir(root):
            print(f'{s}: not found next to verba, skipped'); continue
        for p in master:
            src, dst = os.path.join(HERE, p), os.path.join(root, p)
            if os.path.exists(dst) and filecmp.cmp(src, dst, shallow=False): continue
            bad += 1
            if check: print(f'{s}: {p} differs from Verba')
            else: os.makedirs(os.path.dirname(dst), exist_ok=True); shutil.copyfile(src, dst); print(f'{s}: updated {p}')
        for p in shared_paths(root):
            if p not in master:
                bad += 1; print(f'{s}: {p} is not in Verba (shared files must exist in every site)')
    if check:
        print('all shared files match' if not bad else f'{bad} problem(s)')
        sys.exit(1 if bad else 0)

main()
