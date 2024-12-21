@echo off

reg add "HKEY_CLASSES_ROOT\regfile\shell\Import with Registry Finder" /f /v Icon /t REG_SZ /d "\"%~DP0RegistryFinder.exe\""

reg add "HKEY_CLASSES_ROOT\regfile\shell\Import with Registry Finder\command" /f /ve /t REG_SZ /d "\"%~DP0RegistryFinder.exe\" --import \"%%1\""
